import { Injectable } from '@angular/core';
import { Response }   from "@angular/http";

import { Subject, Observable } from "rxjs";
import 'rxjs/add/operator/map';

import { Angular2TokenService, RegisterData } from "angular2-token";

@Injectable()
export class AuthService {

  userSignedIn$:Subject<boolean> = new Subject();

  constructor(public _tokenService:Angular2TokenService) {
    this._tokenService.validateToken().subscribe(
        res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    )
  }

  logOutUser():Observable<Response>{

    return this._tokenService.signOut().map(
        res => {
          this.userSignedIn$.next(false);
          return res;
        }
    );
  }

  logInUser(signInData: {email:string, password:string}):Observable<Response>{
    return this._tokenService.signIn(signInData).map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    );
  }

  //new

  public registerAccount(registerData: RegisterData): Observable<Response>{
    return this._tokenService.registerAccount(registerData)
      .catch(this.handleErrors)
  }

  public userSignedIn(){

  }

  private handleErrors(error: Response){
    console.log("SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
    return Observable.throw(error);
  }

}
