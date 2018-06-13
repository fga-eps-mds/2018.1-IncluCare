import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Referral } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

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

    private StudentsService: StudentsService,
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
      result = this.StudentsService.updateReferral(this.referral);
    } else {
      result = this.StudentsService.addReferral(this.referral);
    }

    result.subscribe(data => this.router.navigate(['/referrals']));
  }
}
