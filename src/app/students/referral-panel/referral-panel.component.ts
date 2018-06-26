import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as jsPDF from 'jspdf';

import { Referral } from "../../shared/models/models";
import { StudentsService } from '../../shared/services/students.service';

@Component({
  selector: 'app-referral-panel',
  templateUrl: './referral-panel.component.html',
  styleUrls: ['./referral-panel.component.css']
})
export class ReferralPanelComponent implements OnInit {
  name: string;
  editMode: boolean;
  referral: Referral = new Referral();

  @ViewChild('content') content: ElementRef;

  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id)
        return;

      this.studentsService.getReferral(id)
        .subscribe(
          referral => this.referral = referral,
          response => {});
    });
  }

  returnToList() {
    this.router.navigate(['/referrals', this.referral.student.id]);
  }

  deleteReferral(referral) {
    if (confirm("Você tem certeza que quer deletar o encaminhamento " + referral.id + "?")) {
      var stId = referral.student.id;
      this.studentsService.deleteReferral(referral.id)
      .subscribe(data => this.router.navigate(['/referrals', stId]));
    }
  }

  updateReferral(referral){
    var result;
    result = this.studentsService.updateReferral(this.referral);
    result.subscribe(data => this.router.navigate(['/referrals', this.referral.student.id]));
  }

  public generatePDFReferral(){
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('encaminhamento_' + name + '.pdf');
  }

}
