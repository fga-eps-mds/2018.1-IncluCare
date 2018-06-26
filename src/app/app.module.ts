import { NgModule }                         from '@angular/core';
import { HttpModule }                       from '@angular/http';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterializeModule }                from 'angular2-materialize';
import { Angular2TokenService }             from 'angular2-token';
import { OrderModule }                      from 'ngx-order-pipe';
import { NgxMaskModule }                    from 'ngx-mask'

import { AppComponent }                     from './app.component';
import { AppRouterModule }                  from "./app-router.module";
import { AuthGuard }                        from "./shared/guards/auth.guard";
import { LoginGuard }                       from "./shared/guards/login.guard";
import { AuthService }                      from "./shared/services/auth.service";
import { LoginComponent }                   from './login/login.component';
import { RegisterFormComponent }            from './register/register-form/register-form.component';
import { ProfileComponent }                 from './profile/profile.component';
import { StudentsService }                  from './shared/services/students.service';
import { StudentsComponent }                from './students/students.component';
import { StudentFormComponent }             from './students/student-form/student-form.component';
import { FilterPipe }                       from './shared/pipes/filter.pipe';
import { SidenavComponent }                 from './header/sidenav/sidenav.component';
import { NavbarComponent }                  from './header/navbar/navbar.component';
import { StudentPanelComponent }            from './students/student-panel/student-panel.component';
import { DailyLogComponent }                from './students/daily-log/daily-log.component';
import { DailyLogFormComponent }            from './students/daily-log-form/daily-log-form.component';
import { ReportComponent }                  from './students/report/report.component';
import { ReportFormComponent }              from './students/report-form/report-form.component';
import { ReferralComponent }                from './students/referral/referral.component';
import { ReferralFormComponent }            from './students/referral-form/referral-form.component';
import { ReferralPanelComponent }           from './students/referral-panel/referral-panel.component';
import { DailyLogPanelComponent }           from './students/daily-log-panel/daily-log-panel.component';
import { RecommendationPanelComponent }     from './students/recommendation-panel/recommendation-panel.component';
import { AdminPageComponent }               from './profile/admin-page/admin-page.component';

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
    FilterPipe,
    ReferralComponent,
    ReferralFormComponent,
    ReferralPanelComponent,
    DailyLogPanelComponent,
    RecommendationPanelComponent,
    AdminPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    MaterializeModule,
    AppRouterModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    LoginGuard,
    AuthGuard,
    AuthService,
    FilterPipe,
    Angular2TokenService,
    StudentsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
