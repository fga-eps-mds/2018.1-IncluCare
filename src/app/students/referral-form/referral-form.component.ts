import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Angular2TokenService } from "angular2-token";

import { Referral } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-referral-form',
  templateUrl: './referral-form.component.html',
  styleUrls: ['./referral-form.component.css']
})
export class ReferralFormComponent implements OnInit {
  referral: Referral = new Referral();

  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    public authTokenService: Angular2TokenService
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      if (!id) return;
      this.id = id;
    });
  }

  save() {
    var result;

    this.referral.student_id = this.id
    this.referral.created_by = this.authTokenService.currentUserData.name
    this.referral.updated_by = this.authTokenService.currentUserData.name

    if (this.referral.id)
    result = this.studentsService.updateReferral(this.referral);
    else
    result = this.studentsService.addReferral(this.referral);

    result.subscribe(data => this.router.navigate(['/referrals', this.id]));
  }
}
