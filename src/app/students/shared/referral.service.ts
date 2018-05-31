import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ReferralService {

  private url: string = "http://localhost:3000/referrals";

  constructor(private http: Http) { }

  getReferrals(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getReferral(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addReferral(referral){
    return this.http.post(this.url, {'referral': referral})
      .map(res => res.json());
  }

  updateReferral(referral){
    return this.http.put(this.url + '/' + referral.id, {'referral': referral})
      .map(res => res.json());
  }

  deleteReferral(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
