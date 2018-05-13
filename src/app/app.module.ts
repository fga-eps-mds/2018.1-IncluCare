import { NgModule }                         from '@angular/core';
import { HttpModule }                       from '@angular/http';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterializeModule }                from 'angular2-materialize';
import { Angular2TokenService }             from 'angular2-token';

import { AppComponent }                     from './app.component';
import { routes }                           from './app.routes';
import { AuthGuard }                        from "./guards/auth.guard";
import { LoginGuard }                        from "./guards/login.guard";
import { AuthService }                      from "./services/auth.service";
import { LoginComponent }                   from './login/login.component';
import { RegisterFormComponent }            from './register/register-form/register-form.component';
import { ProfileComponent }                 from './profile/profile.component';
import { StudentService }                   from './students/shared/student.service';
import { StudentsComponent }                from './students/students.component';
import { StudentFormComponent }             from './students/student-form/student-form.component';
import { ToolbarComponent }                 from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFormComponent,
    ProfileComponent,
    ToolbarComponent,
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    routes
  ],
  providers: [
    LoginGuard,
    AuthGuard,
    AuthService,
    Angular2TokenService,
    StudentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
