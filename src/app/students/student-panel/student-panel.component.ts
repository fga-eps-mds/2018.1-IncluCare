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
  name: string;
  student: Student = new Student();

  editMode: boolean;

  constructor(
    private studentService: StudentsService,
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

  deleteStudent(student) {
    if (confirm("Você tem certeza que quer deletar o estudante " + student.name + "?")) {
      this.studentService.deleteStudent(student.id).subscribe(null);
    }
  }

  updateStudent(student){
    var result;
    result = this.studentService.updateStudent(this.student);

    result.subscribe(data => this.router.navigate(['/students']));
  }

}
