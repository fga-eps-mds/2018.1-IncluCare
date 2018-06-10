import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as jsPDF from 'jspdf';

import { Report } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

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

  generatePDFReport(reportData: Report){
    let doc = new jsPDF();

    doc.text(15, 15, reportData.reason);

    doc.save('report_student_' + reportData.student_id + '.pdf');
  }

}
