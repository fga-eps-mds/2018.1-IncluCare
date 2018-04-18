import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { RegisterService } from './service/register/register.service';
import { StudentService } from './students/shared/student.service';
import { AuthService } from "./services/auth.service";

import { TeamMemberComponent } from './team-member/team-member.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from "./guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent,
    TeamMemberComponent,
    LoginComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent
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
    AuthGuard,
    AuthService,
    StudentService,
    RegisterService,
    Angular2TokenService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
