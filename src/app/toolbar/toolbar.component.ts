import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { MaterializeDirective } from "angular2-materialize";

import { AuthService } from "../services/auth.service";
import { Angular2TokenService } from "angular2-token";
import { AuthDialogComponent } from "../login/auth-dialog/auth-dialog.component";

@Component({
  selector:     'app-toolbar',
  templateUrl:  './toolbar.component.html',
  styleUrls:    ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(
    public authTokenService:Angular2TokenService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthDialog(){
    this.authDialog.openDialog();
  }

}
