import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { MaterializeDirective } from "angular2-materialize";
import { Angular2TokenService } from "angular2-token";

import { AuthService } from "../shared/services/auth.service";
import { RegisterFormComponent } from "../register/register-form/register-form.component";

@Component({
  selector:     'app-navbar',
  templateUrl:  './navbar.component.html',
  styleUrls:    ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  signOut(){
    this.authService.signOut()
    .subscribe(
      () => this.router.navigate(['/login'])
    )
  }

}
