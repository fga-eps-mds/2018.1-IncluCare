import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service';

import {Student} from "../shared/student";

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {
  name: string;
  student: Student = new Student();


  constructor(

    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id)
        return;

      this.studentService.getStudent(id)
        .subscribe(
          student => this.student = student,
          response => {});
    });
  }

}
