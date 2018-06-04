import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { MaterializeDirective } from "angular2-materialize";
import { Angular2TokenService, UserData } from "angular2-token";

import { AuthService } from "../services/auth.service";
import { RegisterFormComponent } from "../register/register-form/register-form.component";

@Component({
  selector:     'app-sidenav',
  templateUrl:  './sidenav.component.html',
  styleUrls:    ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  memberData: UserData;

  @ViewChild('registerForm') registerForm: RegisterFormComponent;

  constructor(
    public authService: AuthService,
    public authTokenService: Angular2TokenService,
    private router: Router
  ) {}

  ngOnInit() {}

  signOut(){
    this.authService.signOut()
    .subscribe(
      () => this.router.navigate(['/login'])
    )
  }

  userSignedIn(){
    return this.authService.userSignedIn();
  }

  presentAuthDialog(){
    this.registerForm.openDialog();
  }

}
