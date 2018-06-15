import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { RegisterData } from "angular2-token";
import { MaterializeAction } from "angular2-materialize";

import { AuthService } from "../services/auth.service";
import { FormUtils } from "../shared/form.utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formUtils: FormUtils;
  public submitted: boolean;
  public formErrors: Array<string>;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.setupForm();
    this.formUtils = new FormUtils(this.form);
    this.submitted = false;
    this.formErrors = null;
  }

  ngOnInit() {}

  signInUser(){
    this.submitted = true;

    this.authService.signIn(this.form.value as any)
    .subscribe(
        res => {
          if(res.status == 200){
            this.router.navigate(['/students']);
          }
        },
        err => {
          console.log('err:', err);
        }
    );

  }

  private setupForm(){
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }
}
