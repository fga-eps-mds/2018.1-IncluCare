import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MaterializeDirective } from 'angular2-materialize';

import { Student } from '../../shared/models';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  name: string;
  student: Student = new Student();

  classes = [];
  selectedClass: number;

  constructor(
    private studentService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.name = id ? 'Editar Estudante' : 'Criar Estudante';

      if(!id)
      return;

      this.studentService.getStudent(id)
      .subscribe(
        student => this.student = student,
        response => {}
      );
    });

    this.initClasses();
  }

  initClasses(){
    this.classes = [
      {value:1, name:"1º A"},
      {value:2, name:"1º B"},
      {value:3, name:"2º A"},
      {value:4, name:"2º B"}
    ]
  }

  selectClass(value: any){

    switch(value) {
      case '1':
      this.student.year = 1;
      this.student.student_class = 'A';
      break;
      case '2':
      this.student.year = 1;
      this.student.student_class = 'B';
      break;
      case '3':
      this.student.year = 2;
      this.student.student_class = 'A';
      break;
      case '4':
      this.student.year = 2;
      this.student.student_class = 'B';
      break;
      default:
      console.log("Invalid choice");
      break;
    }
  }

  save() {
    this.selectClass(this.selectedClass);

    var result;

    if (this.student.id){
      result = this.studentService.updateStudent(this.student);
    } else {
      result = this.studentService.addStudent(this.student);
    }

    result.subscribe(data => this.router.navigate(['/students']));
  }

}
