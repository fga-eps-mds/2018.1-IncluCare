import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DailyLog } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-daily-log-form',
  templateUrl: './daily-log-form.component.html',
  styleUrls: ['./daily-log-form.component.css']
})
export class DailyLogFormComponent implements OnInit {

  name: string;
  daily_log: DailyLog = new DailyLog();
  idC: number;
  constructor(

    private daily_logService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.name = id ? 'Editar Registro' : 'Criar Registro';

      if (!id)
        return;

      this.idC = id
    });
  }

  save() {
    var result;
    this.daily_log.student_id = this.idC
    if (this.daily_log.id){
      result = this.daily_logService.updateDailyLog(this.daily_log);
    } else {
      result = this.daily_logService.addDailyLog(this.daily_log);
    }

    result.subscribe(data => this.router.navigate(['/dailylogs']));
  }
}
