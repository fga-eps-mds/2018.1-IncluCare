import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DailyLog } from "../../shared/models/models";
import { StudentsService } from '../../shared/services/students.service';

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
    private router: Router,
    private route: ActivatedRoute,
    private dailylogService: StudentsService
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

  returnToList(dailylog) {
    this.router.navigate(['/dailylogs', this.dailylog.student.id]);
  }

  deleteDailyLog(dailylog) {
    if (confirm("Você tem certeza que quer deletar o registro diário" + dailylog.id + "?")) {
      var stId = dailylog.student.id;
      this.dailylogService.deleteDailyLog(dailylog.id)
      .subscribe(data => this.router.navigate(['/dailylogs', stId]));
    }
  }

  updateDailyLog(dailylog){
    var update;
    update = this.dailylogService.updateDailyLog(this.dailylog)
    update.subscribe(data => this.router.navigate(['/dailylogs', this.dailylog.student.id]));
  }

}
