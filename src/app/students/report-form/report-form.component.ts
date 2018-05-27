import { Component, OnInit } from '@angular/core';

import { ReportService } from '../shared/report.service';

import { Report } from "../shared/report";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  name: string;
  report: Report = new Report();
  idC: number;
  constructor(

    private reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.name = id ? 'Editar Relatório' : 'Criar Relatório';

      if (!id)
        return;

      this.idC = id
    });
  }

  save() {
    var result;
    this.report.student_id = this.idC
    if (this.report.id){
      result = this.reportService.updateReport(this.report);
    } else {
      result = this.reportService.addReport(this.report);
    }

    result.subscribe(data => this.router.navigate(['/reports']));
  }
}
