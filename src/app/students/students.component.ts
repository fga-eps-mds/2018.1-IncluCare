import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { OrderPipe } from 'ngx-order-pipe';

import { Student } from "../shared/models";
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  filterClass: string;
  order: string = 'name';
  reverse: boolean = false;
  students: Student[] = [];

  constructor(
    private orderPipe: OrderPipe,
    private studentService: StudentsService
  ) {}

  ngOnInit() {
    this.studentService.getStudents()
    .subscribe(
      data => this.students = data,
      response => {}
    );
  }

  deleteStudent(students) {
    if(confirm("Você tem certeza que quer deletar o estudante " + students.name + "?")) {
      var index = this.students.indexOf(students);
      this.students.splice(index, 1);
      this.studentService.deleteStudent(students.id)
      .subscribe(null);
    }
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
