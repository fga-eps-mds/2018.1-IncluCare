import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ReportService {

  private url: string = "http://localhost:3000/reports";

  constructor(private http: Http) { }

  getReports(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getReport(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addReport(report){
    return this.http.post(this.url, {'report': report})
      .map(res => res.json());
  }

  updateReport(report){
    return this.http.put(this.url + '/' + report.id, {'report': report})
      .map(res => res.json());
  }

  deleteReport(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
