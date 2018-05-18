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

  getDailyLog(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addDailyLog(daily_log){
    return this.http.post(this.url, {'daily_log': daily_log})
      .map(res => res.json());
  }

  updateDailyLog(daily_log){
    return this.http.put(this.url + '/' + daily_log.id, {'daily_log': daily_log})
      .map(res => res.json());
  }

  deleteDailyLog(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
