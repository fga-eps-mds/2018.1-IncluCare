import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Student, Activity } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {
  idC: number;
  name: string;
  editMode: boolean;
  student: Student = new Student();
  activities: Activity[] = [];

  constructor(
    private studentService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if(!id)
      return;

      this.studentService.getStudent(id)
      .subscribe(
        student => this.student = student,
        response => {}
      );
    });
  }

  updateStudent(student){
    this.studentService.updateStudent(this.student)
    .subscribe(data => this.router.navigate(['/students']));
  }

  deleteStudent(student) {
    if(confirm("Você tem certeza que quer deletar o estudante " + student.name + "?")) {
      this.studentService.deleteStudent(student.id)
      .subscribe(data => this.router.navigate(['/students']));
    }
  }
}
