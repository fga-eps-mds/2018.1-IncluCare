import { Component, OnInit } from '@angular/core';

import { ReferralService } from '../shared/referral.service';

import {Referral} from "../shared/referral";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-referral-panel',
  templateUrl: './referral-panel.component.html',
  styleUrls: ['./referral-panel.component.css']
})
export class ReferralPanelComponent implements OnInit {
  name: string;
  editMode: boolean;
  referral: Referral = new Referral();


  constructor(

    private referralService: ReferralService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id)
        return;

      this.referralService.getReferral(id)
        .subscribe(
          referral => this.referral = referral,
          response => {});
    });
  }

  deleteReferral(referral) {
    if (confirm("Você tem certeza que quer deletar o encaminhamento " + referral.id + "?")) {
      this.referralService.deleteReferral(referral.id).subscribe(null);
    }
  }

  updateReferral(referral){
    var result;
    result = this.referralService.updateReferral(this.referral);

    result.subscribe(data => this.router.navigate(['/referrals']));
  }

}
