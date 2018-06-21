import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Angular2TokenService } from "angular2-token";

import { Report, Student } from "../../shared/models/models";
import { StudentsService } from '../../shared/services/students.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  name: string;
  report: Report = new Report();
  student: Student = new Student();
  idC: number;
  constructor(
    public authTokenService: Angular2TokenService,
    private reportService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if(!id)
      return;

      this.reportService.getStudent(id)
      .subscribe(
        student => this.student = student,
        response => {}
      );
    });

    this.initCheckboxes();
  }

  initCheckboxes(){
    this.report.reason_adequation = false;
    this.report.reason_emotional = false;
    this.report.reason_performance = false;
    this.report.reason_behavior = false;
    this.report.reason_language = false;
    this.report.level_school = false;
    this.report.level_family = false;
    this.report.level_student = false;
    this.report.possibly_saa = false;
    this.report.possibly_eeaa = false;
    this.report.possibly_resources = false;
    this.report.possibly_adequation = false;
  }

  save() {
    var result;
    this.report.student_id = this.student.id
    this.report.created_by = this.authTokenService.currentUserData.name
    this.report.updated_by = this.authTokenService.currentUserData.name
    if (this.report.id){
      result = this.reportService.updateReport(this.report);
    } else {
      result = this.reportService.addReport(this.report);
    }

    result.subscribe(data => this.router.navigate(['/reports']));
  }
}
