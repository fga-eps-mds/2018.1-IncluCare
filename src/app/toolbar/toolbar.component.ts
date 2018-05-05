import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { AuthDialogComponent } from "../login/auth-dialog/auth-dialog.component";

@Component({
  selector:     'app-toolbar',
  templateUrl:  './toolbar.component.html',
  styleUrls:    ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(
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
