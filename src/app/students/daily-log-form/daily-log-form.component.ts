import { Component, OnInit } from '@angular/core';

import { DailyLogService } from '../shared/dailylog.service';

import { DailyLog } from "../shared/dailylog";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-log-form',
  templateUrl: './daily-log-form.component.html',
  styleUrls: ['./daily-log-form.component.css']
})
export class DailyLogFormComponent implements OnInit {

  name: string;
  daily_log: DailyLog = new DailyLog();

  constructor(

    private daily_logService: DailyLogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.name = id ? 'Editar Registro' : 'Criar Registro';

      if (!id)
        return;
    });
  }

  save() {
    var result;

    if (this.daily_log.id){
      result = this.daily_logService.updateDailyLog(this.daily_log);
    } else {
      result = this.daily_logService.addDailyLog(this.daily_log);
    }

    result.subscribe(data => this.router.navigate(['/dailylogs']));
  }
}
