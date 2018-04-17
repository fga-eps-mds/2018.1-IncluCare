import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  registerTeamMember(teamMember: any){
    let team_member = {email: teamMember.email, password: teamMember.password}
    return this.http.post('http://localhost:3000/team_members', team_member).map(
      (response: Response) => {return response.json()
    });
  }

}
