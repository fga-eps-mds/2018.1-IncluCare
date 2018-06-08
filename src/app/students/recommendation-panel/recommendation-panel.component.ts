import { Component, OnInit } from '@angular/core';
import { RecommendationData } from "../shared/recommendationData";
import { Router, ActivatedRoute } from '@angular/router';
import { RecommendationService } from '../shared/recommendationService.service';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-panel.component.html',
  styleUrls: ['./recommendation-panel.component.css']
})
export class RecommendationPanelComponent implements OnInit {

  recommendation: RecommendationData = new RecommendationData();
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
    });
  }


}
