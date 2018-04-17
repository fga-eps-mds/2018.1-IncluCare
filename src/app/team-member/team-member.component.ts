import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { RegisterService } from '../service/register/register.service'

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  constructor(private fb:FormBuilder, private teamMemberService: RegisterService) {
    this.buildFormControl();
    this.registerForm = fb.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {

  }

  registerTeamMember(user: any){
    console.log(user)
    this.teamMemberService.registerTeamMember(user).subscribe(
      success => {console.log(success)},
      error => {}
    )
  }

  buildFormControl(){
    this.email = new FormControl(null, Validators.compose([Validators.required, Validators.email]));
    this.password = new FormControl(null, Validators.compose([Validators.required]));

  }

}
