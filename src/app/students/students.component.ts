import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterializeDirective } from 'angular2-materialize';
import { OrderPipe } from 'ngx-order-pipe';

import { Student } from "../shared/models/models";
import { StudentsService } from '../shared/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  classes = [];

  filterStudent: string;
  filterClass: string;
  reverse: boolean = false;
  order: string = 'name';

  constructor(
    private orderPipe: OrderPipe,
    private studentService: StudentsService
  ) {}

  ngOnInit() {
    this.studentService.getStudents()
    .subscribe(
      data => this.students = this.setYearClassOfStudent(data),
      response => {}
    );

    this.initClasses();
  }

  setOrder(value: string) {
    if (this.order === value) this.reverse = !this.reverse;
    this.order = value;
  }

  initClasses(){
    this.classes = ["1° A", "1° B", "2° A", "2° B"];
  }

  setYearClassOfStudent(students: Student[]){
    for(let s of students){
      s.year_class = s.year + "° " + s.student_class;
    }
    return students;
  }
}
