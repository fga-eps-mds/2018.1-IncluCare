import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DailyLog } from "../../shared/models/models";
import { AuthService } from '../../shared/services/auth.service';
import { StudentsService } from '../../shared/services/students.service';

@Component({
  selector: 'app-daily-log-form',
  templateUrl: './daily-log-form.component.html',
  styleUrls: ['./daily-log-form.component.css']
})
export class DailyLogFormComponent implements OnInit {
  dailyLog: DailyLog = new DailyLog();

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

  returnToList(dailylog) {
    this.router.navigate(['/dailylogs', this.dailyLog.student.id]);
  }

  save() {
    var result;

    this.dailyLog.student_id = this.id
    this.dailyLog.created_by = this.authService.currentUserData().name
    this.dailyLog.updated_by = this.authService.currentUserData().name

    if (this.dailyLog.id)
    result = this.studentsService.updateDailyLog(this.dailyLog);
    else
    result = this.studentsService.addDailyLog(this.dailyLog);

    result.subscribe(data => this.router.navigate(['/dailylogs', this.id]));
  }
}
