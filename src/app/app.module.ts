import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { routes } from './app.routes';

import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentService } from './students/shared/student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
