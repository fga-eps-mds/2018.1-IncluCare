import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service';

import { Student } from "../shared/student";

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

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

      this.name = id ? 'Editar Estudante' : 'Criar Estudante';

      if (!id)
        return;

      this.studentService.getStudent(id)
        .subscribe(
          student => this.student = student,
          response => {});
    });
  }

  save() {
    var result;

    if (this.student.id){
      result = this.studentService.updateStudent(this.student);
    } else {
      result = this.studentService.addStudent(this.student);
    }

    result.subscribe(data => this.router.navigate(['/students']));
  }

}
