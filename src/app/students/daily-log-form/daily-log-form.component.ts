import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Angular2TokenService } from "angular2-token";

import { DailyLog } from "../../shared/models/models";
import { AuthService } from '../../shared/services/auth.service';
import { StudentsService } from '../../shared/services/students.service';

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
    private authService: AuthService,
    private studentsService: StudentsService
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
    this.daily_log.created_by = this.authService.currentUserData().name
    this.daily_log.updated_by = this.authService.currentUserData().name

    if (this.daily_log.id)
    result = this.studentsService.updateDailyLog(this.daily_log);
    else
    result = this.studentsService.addDailyLog(this.daily_log);

    result.subscribe(data => this.router.navigate(['/dailylogs', this.id]));
  }
}
