import { Injectable }           from '@angular/core';
import { CanActivate, Router }  from "@angular/router";

import { AuthService } from "../services/auth.service";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate() {
    if(this.authService.userSignedIn()){
      this.router.navigate(['/students']);
      return false;
    } else {
      return true;
    }
  }

}
