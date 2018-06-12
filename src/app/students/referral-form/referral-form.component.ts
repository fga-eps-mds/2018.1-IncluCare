import { Component, OnInit } from '@angular/core';

import { ReferralService } from '../shared/referral.service';

import { Referral } from "../shared/referral";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-referral-form',
  templateUrl: './referral-form.component.html',
  styleUrls: ['./referral-form.component.css']
})
export class ReferralFormComponent implements OnInit {

  name: string;
  referral: Referral = new Referral();
  idC: number;
  constructor(

    private referralService: ReferralService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.name = id ? 'Editar Encaminhamento' : 'Criar Encaminhamento';

      if (!id)
        return;

      this.idC = id
    });
  }

  save() {
    var result;
    this.referral.student_id = this.idC
    if (this.referral.id){
      result = this.referralService.updateReferral(this.referral);
    } else {
      result = this.referralService.addReferral(this.referral);
    }

    result.subscribe(data => this.router.navigate(['/referrals']));
  }
}
