import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class StudentsService {

  private studentsUrl: string = "http://localhost:3000/students";
  private dailyLogsUrl: string = "http://localhost:3000/daily_logs";
  private reportsUrl: string = "http://localhost:3000/reports";
  private referralsUrl: string = "http://localhost:3000/referrals";
  private recommendationsUrl: string = "http://localhost:3000/recommendations";

  constructor(private http: Http) {}

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

  //ReferralsService

  getReferrals(){
    return this.http.get(this.referralsUrl)
    .map(res => res.json());
  }

  getReferral(id){
    return this.http.get(this.referralsUrl + '/' + id)
    .map(res => res.json());
  }

  addReferral(referral){
    return this.http.post(this.referralsUrl, {'referral': referral})
    .map(res => res.json());
  }

  updateReferral(referral){
    return this.http.put(this.referralsUrl + '/' + referral.id, {'referral': referral})
    .map(res => res.json());
  }

  deleteReferral(id){
    return this.http.delete(this.referralsUrl + '/' + id)
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

  //RecommendationsService

  getRecommendation(id){
    return this.http.get(this.recommendationsUrl + '/' + id)
    .map(res => res.json());
  }

  updateRecommendation(recommendation){
    return this.http.put(this.recommendationsUrl + '/' + recommendation.id, {'recommendation': recommendation})
    .map(res => res.json());
  }

  createRecommendation(recommendation){
    return this.http.post(this.recommendationsUrl, {recommendation})
    .map(res => res.json());
  }

}
