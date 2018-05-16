import { Component, OnInit }      from '@angular/core';
import { StudentService }         from '../shared/student.service';
import { Student }                from "../shared/student";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.component.html',
  styleUrls: ['./daily-log.component.css']
})
export class DailyLogComponent implements OnInit {
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  createActivity(){
  }

  deleteActivity(){}

  updateActivity(){}

}
