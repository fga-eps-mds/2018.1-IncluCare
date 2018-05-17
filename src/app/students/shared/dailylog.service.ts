import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DailyLogService {

  private url: string = "http://localhost:3000/daily_logs";

  constructor(private http: Http) { }

  getDailyLogs(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getDaiyLog(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addDaiyLog(dailylog){
    return this.http.post(this.url, {'dailylog': dailylog})
      .map(res => res.json());
  }

  updateDaiyLog(dailylog){
    return this.http.put(this.url + '/' + dailylog.id, {'dailylog': dailylog})
      .map(res => res.json());
  }

  deleteDaiyLog(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
