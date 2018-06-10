import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RecommendationService{

  private url: string = "http://localhost:3000/recommendations";

  constructor(private http: Http) {}

  getRecommendation(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  updateRecommendation(recommendation){
    return this.http.put(this.url + '/' + recommendation.id, {'recommendation': recommendation})
      .map(res => res.json());
  }

  createRecommendation(recommendation){
    return this.http.post(this.url, {recommendation})
      .map(res => res.json());
  }

}
