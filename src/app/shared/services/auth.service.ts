import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { Http } from '@angular/http';
import { Subject } from "rxjs";

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService, UserData, SignInData, RegisterData, UpdatePasswordData} from "angular2-token";

import { TeamMember } from "../models/team-member.model";

@Injectable()
export class AuthService {

  private url: string = "http://localhost:3000/team_members";

  constructor(
    private http: Http,
    public _tokenService: Angular2TokenService
  ) {}

  public signIn(signInData: SignInData): Observable<Response>{
    return this._tokenService.signIn(signInData)
    .catch(this.handleErrors)
  }

  public signOut(): Observable<Response>{
    return this._tokenService.signOut()
    .catch(this.handleErrors);
  }

  public registerAccount(registerData: RegisterData): Observable<Response>{
    return this._tokenService.registerAccount(registerData)
    .catch(this.handleErrors)
  }

  public updatePassword(updatePasswordData: UpdatePasswordData): Observable<Response>{
    return this._tokenService.updatePassword(updatePasswordData)
    .catch(this.handleErrors)
  }

  public deleteAccount(): Observable<Response>{
    return this._tokenService.deleteAccount();
  }

  public userSignedIn(): boolean {
    return this._tokenService.userSignedIn();
  }

  public userIsAdmin(): boolean {
    var teamMember: TeamMember = this._tokenService.currentUserData as TeamMember;
    if (teamMember !== undefined) return teamMember.admin;
  }

  public currentUserData(): TeamMember{
    return this._tokenService.currentUserData as TeamMember;
  }

  public getTeamMembers(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

  public deleteTeamMember(id){
    return this.http.delete(this.url + '/' + id)
    .map(res => res.json());
  }

  //Handling Errors
  private handleErrors(error: Response){
  console.log("SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
  return Observable.throw(error);
}

}
