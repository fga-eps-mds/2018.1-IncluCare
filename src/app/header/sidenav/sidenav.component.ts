import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { MaterializeDirective } from "angular2-materialize";

import { TeamMember } from "../../shared/models/team-member.model";
import { AuthService } from "../../shared/services/auth.service";
import { RegisterFormComponent } from "../../register/register-form/register-form.component";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('registerForm') registerForm: RegisterFormComponent;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("init");
  }

  refreshSidenav(){
    this.ngOnInit();
  }

  presentAuthDialog(){
    this.registerForm.openDialog();
  }

}
