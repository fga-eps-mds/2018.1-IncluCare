import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Student } from "../../services/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  name: string;
  student: Student = new Student();

  constructor(

    private studentService: StudentsService,
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
