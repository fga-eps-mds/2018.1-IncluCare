import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentsService {

  private studentsUrl: string = "http://localhost:3000/students";
  private dailyLogsUrl: string = "http://localhost:3000/daily_logs";
  private reportsUrl: string = "http://localhost:3000/reports";

  constructor(private http: Http) { }

  //Students Service
  getStudents(){
    return this.http.get(this.studentsUrl)
      .map(res => res.json());
  }

  getStudent(id){
    return this.http.get(this.studentsUrl + '/' + id)
      .map(res => res.json());
  }

  addStudent(student){
    return this.http.post(this.studentsUrl, {'student': student})
      .map(res => res.json());
  }

  updateStudent(student){
    return this.http.put(this.studentsUrl + '/' + student.id, {'student': student})
      .map(res => res.json());
  }

  deleteStudent(id){
    return this.http.delete(this.studentsUrl + '/' + id)
      .map(res => res.json());
  }

  //DailyLogService
  getDailyLogs(){
    return this.http.get(this.dailyLogsUrl)
      .map(res => res.json());
  }

  getDailyLog(id){
    return this.http.get(this.dailyLogsUrl + '/' + id)
      .map(res => res.json());
  }

  addDailyLog(daily_log){
    return this.http.post(this.dailyLogsUrl, {'daily_log': daily_log})
      .map(res => res.json());
  }

  updateDailyLog(daily_log){
    return this.http.put(this.dailyLogsUrl + '/' + daily_log.id, {'daily_log': daily_log})
      .map(res => res.json());
  }

  deleteDailyLog(id){
    return this.http.delete(this.dailyLogsUrl + '/' + id)
      .map(res => res.json());
  }

  //ReportsService
  getReports(){
    return this.http.get(this.reportsUrl)
      .map(res => res.json());
  }

  getReport(id){
    return this.http.get(this.reportsUrl + '/' + id)
      .map(res => res.json());
  }

  addReport(report){
    return this.http.post(this.reportsUrl, {'report': report})
      .map(res => res.json());
  }

  updateReport(report){
    return this.http.put(this.reportsUrl + '/' + report.id, {'report': report})
      .map(res => res.json());
  }

  deleteReport(id){
    return this.http.delete(this.reportsUrl + '/' + id)
      .map(res => res.json());
  }

}
