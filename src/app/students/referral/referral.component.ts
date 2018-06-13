import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Referral } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {
  private referrals: Referral[] = [];

  constructor(
    private referralService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.referralService.getReferrals()
    .subscribe(
      data => this.referrals = data,
      response => {}
    );
  }

  getReferrals() {
    return this.referrals;
  }

  deleteActivity(referrals){
    if (confirm("Você tem certeza que quer deletar o Registro " + referrals.id + "?")) {
      var index = this.referrals.indexOf(referrals);
      this.referrals.splice(index, 1);
      this.referralService.deleteReferral(referrals.id)
      .subscribe(null);
    }
  }

}
