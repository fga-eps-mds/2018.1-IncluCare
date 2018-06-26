import { Component } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector:     'app-root',
  templateUrl:  './app.component.html',
  styleUrls:    ['./app.component.css']
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private _tokenService: Angular2TokenService
  ){
    this._tokenService.init(environment.token_auth_config);
  }
}
