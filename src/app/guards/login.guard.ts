import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

import { Angular2TokenService } from "angular2-token";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private authTokenService:Angular2TokenService,
    private router:Router
  ){}

  canActivate() {
    if(this.authTokenService.userSignedIn()){
      this.router.navigate(['/students']);
      return false;
    } else {
      return true;
    }
  }

}
