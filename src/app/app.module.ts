import { NgModule }                         from '@angular/core';
import { HttpModule }                       from '@angular/http';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterializeModule }                from 'angular2-materialize';
import { Angular2TokenService }             from 'angular2-token';

import { AppComponent }                     from './app.component';
import { routes }                           from './app.routes';
import { AuthGuard }                        from "./guards/auth.guard";
import { LoginGuard }                       from "./guards/login.guard";
import { AuthService }                      from "./services/auth.service";
import { LoginComponent }                   from './login/login.component';
import { RegisterFormComponent }            from './register/register-form/register-form.component';
import { ProfileComponent }                 from './profile/profile.component';
import { StudentService }                   from './students/shared/student.service';
import { StudentsComponent }                from './students/students.component';
import { StudentFormComponent }             from './students/student-form/student-form.component';
import { FilterStudentClass }               from './students/filterStudentClass.pipe';
import { SidenavComponent }                 from './sidenav/sidenav.component';
import { NavbarComponent }                 from './navbar/navbar.component';
import { StudentPanelComponent }            from './students/student-panel/student-panel.component';
import { DailyLogComponent }                from './students/daily-log/daily-log.component';
import { DailyLogService }                  from './students/shared/dailylog.service';
import { DailyLogFormComponent }            from './students/daily-log-form/daily-log-form.component';
import { ReportService }                    from './students/shared/report.service';
import { ReportComponent }                  from './students/report/report.component';
import { ReportFormComponent }              from './students/report-form/report-form.component';
import { ReferralService }                  from './students/shared/referral.service';
import { ReferralComponent }                from './students/referral/referral.component';
import { ReferralFormComponent }            from './students/referral-form/referral-form.component';
import { ReferralPanelComponent } from './students/referral-panel/referral-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFormComponent,
    ProfileComponent,
    SidenavComponent,
    NavbarComponent,
    StudentsComponent,
    StudentFormComponent,
    StudentPanelComponent,
    DailyLogComponent,
    DailyLogFormComponent,
    ReportComponent,
    ReportFormComponent,
    FilterStudentClass,
    ReferralComponent,
    ReferralFormComponent,
    ReferralPanelComponent
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
    StudentService,
    DailyLogService,
    ReportService,
    ReferralService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
