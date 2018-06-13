import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as jsPDF from 'jspdf';

import { RecommendationData } from "../../shared/models";
import { RecommendationService } from '../shared/recommendation.service';

@Component({
  selector: 'app-recommendation-panel',
  templateUrl: './recommendation-panel.component.html',
  styleUrls: ['./recommendation-panel.component.css']
})
export class RecommendationPanelComponent implements OnInit {

  @ViewChild( 'content' ) content: ElementRef;
  recommendation: RecommendationData = new RecommendationData();
  idAux: number;

  constructor(
    private recommendationService: RecommendationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
        if (!id)
        return;

    this.recommendationService.getRecommendation(id)
      .subscribe(
        recommendation => this.recommendation = recommendation,
        response => {});

    this.idAux = id;
    });
  }

  updateRecommendation(recommendation){
    var result;
    result = this.recommendationService.updateRecommendation(this.recommendation);
    result.subscribe(data => this.router.navigate(['/recommendation']));

    window.location.reload(true); //refrash the page
  }

  createRecommendation(){
    this.recommendation.id = this.idAux
    this.recommendation.student_id = this.idAux
    var result;
    result = this.recommendationService.createRecommendation(this.recommendation);
    result.subscribe(data => this.router.navigate(['/recommendation']));

    window.location.reload(true); //refrash the page
  }

  public generatePDFRecommendation(name){
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

    doc.save('recomendação_' + name + '.pdf');
  }

}
