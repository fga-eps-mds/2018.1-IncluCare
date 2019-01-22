import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { RegisterData } from "angular2-token";
import { MaterializeAction } from "angular2-materialize";

import { AuthService } from "../../shared/services/auth.service"
import { FormUtils } from "../../shared/form.utils";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();

  form: FormGroup;
  formUtils: FormUtils;
  public submitted: boolean;
  public formErrors: Array<string>;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.setupForm();
    this.formUtils = new FormUtils(this.form);
    this.submitted = false;
    this.formErrors = null;
  }

  ngOnInit() {}

  openDialog(){
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeDialog(){
    this.modalActions.emit({action:"modal", params:['close']});
  }

  public signUpUser(){
    this.submitted = true;

    this.authService.registerAccount(this.form.value as any)
      .subscribe(
        () => {
          alert('Novo membro cadastrado com sucesso!');
          this.closeDialog();
          this.formErrors = null;
        },
        (error) => {
          this.submitted = false;

          if( error.status === 422 )
            this.formErrors = JSON.parse(error._body).errors.full_messages;
          else
            this.formErrors = ["Não foi possível processar a sua solicitação. Por favor, tente mais tarde."]
        }
      )
  }

  public passwordConfirmationValidator(form: FormGroup){
    if(form.get('password').dirty && form.get('password').value === form.get('passwordConfirmation').value)
      form.get('passwordConfirmation').setErrors(null)
    else
      form.get('passwordConfirmation').setErrors({'mismatch': true})
  }

  private setupForm(){
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: [null, [Validators.required]],
      admin: [null, [Validators.minLength(3)]],
    }, { validator: this.passwordConfirmationValidator })
  }
}
