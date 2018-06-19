import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Student, DailyLog } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.component.html',
  styleUrls: ['./daily-log.component.css']
})
export class DailyLogComponent implements OnInit {
  student: Student = new Student();
  dailyLogs: DailyLog[] = [];

  reverse: boolean = false;
  order: string = 'date';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.initStudent();
    this.initDailyLogs();
  }

  initStudent(){
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if(!id)
      return;

      this.studentsService.getStudent(id)
      .subscribe(
        student => this.student = student,
        response => {}
      );
    });
  }

  initDailyLogs(){
    this.studentsService.getDailyLogs()
    .subscribe(
      data => this.filterByID(data),
      response => {}
    );
  }

  filterByID(data){
    for(let d of data)
      if(d.student.id === this.student.id) this.dailyLogs.push(d);
  }

  setOrder(value: string) {
    if (this.order === value) this.reverse = !this.reverse;
    this.order = value;
  }

}
