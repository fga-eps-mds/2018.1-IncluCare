import { Component, OnInit }      from '@angular/core';
import { DailyLogService }         from '../shared/dailylog.service';
import {DailyLog} from "../shared/dailylog";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.component.html',
  styleUrls: ['./daily-log.component.css']
})
export class DailyLogComponent implements OnInit {

   private daily_logs: DailyLog[] = [];

  constructor(
    private dailylogService: DailyLogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dailylogService.getDailyLogs()
      .subscribe(
         data => this.daily_logs = data,
         response => {}
        );
  }

  getDailyLogs() {
    return this.daily_logs;
  }

  createActivity(){
  }

  deleteActivity(){}

  updateActivity(){}

}
