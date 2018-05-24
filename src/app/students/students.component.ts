import { Component, OnInit }  from '@angular/core';
import { StudentService }     from './shared/student.service';
import { Student }            from "./shared/student";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from './filter.pipe';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  name: string;
  searchText: string = "";

  private students: Student[] = [];

  constructor(private studentService: StudentService) {
     }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe(
         data => this.students = data,
         response => {}
        );
  }

  deleteStudent(students) {
    if (confirm("Você tem certeza que quer deletar o estudante " + students.name + "?")) {
      var index = this.students.indexOf(students);
      this.students.splice(index, 1);
      this.studentService.deleteStudent(students.id)
        .subscribe(null);

    }
  }

  getStudents() {
    return this.students;
  }

}
