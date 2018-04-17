import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { routes } from './app.routes';

import { MaterializeModule } from 'angular2-materialize';

import { TeamMemberComponent } from './team-member/team-member.component';
import { RegisterService } from './service/register/register.service';



import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentService } from './students/shared/student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent,
    TeamMemberComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    StudentService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
