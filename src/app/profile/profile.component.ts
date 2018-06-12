import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { Angular2TokenService, UpdatePasswordData } from "angular2-token";
import { MaterializeAction } from "angular2-materialize"

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    public authTokenService: Angular2TokenService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  openNewPassawordModal(){
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeNewPasswordModal(){
    this.modalActions.emit({action:"modal", params:['close']});
  }

  updatePassword(){
    this.authService.updatePassword(this.updatePasswordData).subscribe(
      res => {
        this.updatePasswordData    = <UpdatePasswordData>{};
      }
    );
  }
  
}
