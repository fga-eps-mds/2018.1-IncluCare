import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { MaterializeDirective } from "angular2-materialize";
import { Angular2TokenService } from "angular2-token";

import { AuthService } from "../services/auth.service";
import { RegisterFormComponent } from "../register/register-form/register-form.component";

@Component({
  selector:     'app-toolbar',
  templateUrl:  './toolbar.component.html',
  styleUrls:    ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('registerForm') registerForm: RegisterFormComponent;

  constructor(
    public authTokenService: Angular2TokenService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  logOut(){
    this.authService.logOutUser()
    .subscribe(
      () => this.router.navigate(['/login'])
    )
  }

  presentAuthDialog(){
    this.registerForm.openDialog();
  }

}
