import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Student } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {
  student: Student = new Student();

  editMode: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
  ) { }

  ngOnInit() {
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

  updateStudent(student){
    this.studentsService.updateStudent(this.student)
    .subscribe(data => this.router.navigate(['/students']));
  }

  deleteStudent(student) {
    if(confirm("Você tem certeza que quer deletar o estudante " + student.name + "?")) {
      this.studentsService.deleteStudent(student.id)
      .subscribe(data => this.router.navigate(['/students']));
    }
  }
}
