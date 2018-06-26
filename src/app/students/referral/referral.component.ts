import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Student, Referral } from "../../shared/models/models";
import { StudentsService } from '../../shared/services/students.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {
  student: Student = new Student();
  referrals: Referral[] = [];

  reverse: boolean = false;
  order: string = 'date';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.initStudent();
    this.initReferrals();
  }

  initStudent(){
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

  initReferrals(){
    this.studentsService.getReferrals()
    .subscribe(
      data => this.filterByID(data),
      response => {}
    );
  }

  filterByID(data){
    for(let d of data)
      if(d.student.id === this.student.id) this.referrals.push(d);
  }

  setOrder(value: string) {
    if (this.order === value) this.reverse = !this.reverse;
    this.order = value;
  }

}
