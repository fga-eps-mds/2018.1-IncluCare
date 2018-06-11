import { Component, OnInit } from '@angular/core';

import { DailyLogService } from '../shared/dailylog.service';

import {DailyLog} from "../shared/dailylog";

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-daily-log-panel',
  templateUrl: './daily-log-panel.component.html',
  styleUrls: ['./daily-log-panel.component.css']
})
export class DailyLogPanelComponent implements OnInit {
  id: any;
  editMode: boolean;
  dailylog: DailyLog = new DailyLog();


  constructor(

    private dailylogService: DailyLogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id)
        return;

      this.dailylogService.getDailyLog(id)
        .subscribe(
          dailylog => this.dailylog = dailylog,
          response => {});
    });
  }

  deleteDailyLog(dailylog) {
    if (confirm("Você tem certeza que quer deletar o registro diário" + dailylog.id + "?")) {
      this.dailylogService.deleteDailyLog(dailylog.id).subscribe(null);
    }
  }

  updateDailyLog(dailylog){
    var result;
    result = this.dailylogService.updateDailyLog(this.dailylog);

    result.subscribe(data => this.router.navigate(['/dailylogs']));
  }

}
