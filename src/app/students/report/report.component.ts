import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as Docxtemplater from 'docxtemplater';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import * as FileSaver from 'file-saver';

import { Report } from "../../shared/models/models";
import { StudentsService } from '../../shared/services/students.service';

declare const require: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  URL = "../../../assets/docs/report-template.docx";

  private reports: Report[] = [];

  constructor(
    private reportService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reportService.getReports()
    .subscribe(
      data => this.reports = data,
      response => {}
    );
  }

  getReports() {
    return this.reports;
  }

  loadFileGeneration(report: Report, URL, callback){
    function loadFile(report, url, callback){
      JSZipUtils.getBinaryContent(url, callback)
    };

    loadFile(report, this.URL, function(error, content){
      if(error){throw error};
      const zip = new JSZip(content);
      const doc = new Docxtemplater().loadZip(zip)
      doc.setData(report);
      try {
        doc.render()
      } catch(error){
        const e = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          properties: error.properties
        }
        console.log(JSON.stringify({error: e}));
        throw error;
      }
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      })
      FileSaver.saveAs(out, 'report_student_' + report.student_id + '.docx')
    })
  }

}
