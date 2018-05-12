import { Injectable } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Subject, Observable } from "rxjs";
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';

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

  registerUser(signUpData: { name: string, email: string, password: string, passwordConfirmation: string }): Observable<Response>{
    return this._tokenService.registerAccount(signUpData).map(
        res => {
          this.userSignedIn$.next(true);
          return res
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


}
