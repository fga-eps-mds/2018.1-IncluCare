import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { RegisterService } from './service/register/register.service';
import { StudentService } from './students/shared/student.service';

import { TeamMemberComponent } from './team-member/team-member.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent,
    TeamMemberComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routes
  ],
  providers: [
    StudentService,
    RegisterService,
    Angular2TokenService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
