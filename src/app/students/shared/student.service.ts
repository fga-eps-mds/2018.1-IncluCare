import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentService {

  private url: string = "http://localhost:3000/students";

  constructor(private http: Http) { }

  getStudents(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getStudent(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addStudent(student){
    return this.http.post(this.url, {'student': student})
      .map(res => res.json());
  }

  updateStudent(student){
    return this.http.put(this.url + '/' + student.id, {'student': student})
      .map(res => res.json());
  }

  deleteStudent(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
