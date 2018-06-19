import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Angular2TokenService } from "angular2-token";

import { DailyLog } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-daily-log-form',
  templateUrl: './daily-log-form.component.html',
  styleUrls: ['./daily-log-form.component.css']
})
export class DailyLogFormComponent implements OnInit {
  daily_log: DailyLog = new DailyLog();

  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    public authTokenService: Angular2TokenService
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      if (!id) return;
      this.id = id;
    });
  }

  save() {
    var result;

    this.daily_log.student_id = this.id
    this.daily_log.created_by = this.authTokenService.currentUserData.name
    this.daily_log.updated_by = this.authTokenService.currentUserData.name

    if (this.daily_log.id)
    result = this.studentsService.updateDailyLog(this.daily_log);
    else
    result = this.studentsService.addDailyLog(this.daily_log);

    result.subscribe(data => this.router.navigate(['/dailylogs', this.id]));
  }
}
