import { Injectable } from '@angular/core';
import { Response } from "@angular/http";

//import { Subject, Observable } from "rxjs";
import { Subject } from "rxjs";
import 'rxjs/add/operator/map';

import { Observable } from "rxjs/Observable";
//import { TokenService } from "token.service";

import { Angular2TokenService, SignInData, RegisterData, UpdatePasswordData} from "angular2-token";

@Injectable()
export class AuthService {

  private url: string = "http://localhost:3000/auth";

  constructor(public _tokenService: Angular2TokenService) {}

  public updateTeamMember(teamMemberName){
    return this.http.put(this.url, {'name': teamMemberName})
    .map(res => res.json());
  }

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

  public userSignedIn(): boolean{
    return this._tokenService.userSignedIn();
  }

  private handleErrors(error: Response){
    console.log("SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
    return Observable.throw(error);
  }

}
