import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as jsPDF from 'jspdf';

import { Referral } from "../../shared/models";
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-referral-panel',
  templateUrl: './referral-panel.component.html',
  styleUrls: ['./referral-panel.component.css']
})
export class ReferralPanelComponent implements OnInit {

  @ViewChild( 'content' ) content: ElementRef;
  name: string;
  editMode: boolean;
  referral: Referral = new Referral();

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
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

  deleteReferral(referral) {
    if (confirm("Você tem certeza que quer deletar o encaminhamento " + referral.id + "?")) {
      this.studentsService.deleteReferral(referral.id).subscribe(null);
    }
  }

  updateReferral(referral){
    var result;
    result = this.studentsService.updateReferral(this.referral);

    result.subscribe(data => this.router.navigate(['/referrals']));
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

    doc.save('teste.pdf');
  }

}
