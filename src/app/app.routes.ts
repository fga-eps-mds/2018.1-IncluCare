import { ModuleWithProviders }          from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { AuthGuard }                    from "./guards/auth.guard";
import { LoginGuard }                   from "./guards/login.guard";
import { LoginComponent }               from "./login/login.component";
import { ProfileComponent }             from "./profile/profile.component";
import { StudentsComponent }            from './students/students.component';
import { StudentFormComponent }         from './students/student-form/student-form.component';
import { StudentPanelComponent }        from './students/student-panel/student-panel.component';
import { DailyLogComponent }            from './students/daily-log/daily-log.component';
import { DailyLogFormComponent }        from './students/daily-log-form/daily-log-form.component';
import { ReportComponent }              from './students/report/report.component';
import { ReportFormComponent }          from './students/report-form/report-form.component';
import { ReferralComponent }            from './students/referral/referral.component';
import { ReferralFormComponent }        from './students/referral-form/referral-form.component';
import { ReferralPanelComponent }       from './students/referral-panel/referral-panel.component';
import { DailyLogPanelComponent }       from './students/daily-log-panel/daily-log-panel.component';
import { RecommendationPanelComponent } from './students/recommendation-panel/recommendation-panel.component';

const APP_ROUTES: Routes = [
  { path: ''                  , redirectTo: 'students'          , pathMatch: 'full'                            },
  { path: 'login'             , component: LoginComponent       ,                     canActivate: [LoginGuard]},
  { path: 'profile'           , component: ProfileComponent     ,                     canActivate: [AuthGuard] },
  { path: 'students'          , component: StudentsComponent    , pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: 'students/new'      , component: StudentFormComponent ,                     canActivate: [AuthGuard] },
  { path: 'students/:id'      , component: StudentFormComponent ,                     canActivate: [AuthGuard] },
  { path: 'students/:id/edit' , component: StudentFormComponent ,                     canActivate: [AuthGuard] },
  { path: 'studentpanel/:id'  , component: StudentPanelComponent,                     canActivate: [AuthGuard] },
  { path: 'dailylog/:id'      , component: DailyLogFormComponent,                     canActivate: [AuthGuard] },
  { path: 'dailylogs'         , component: DailyLogComponent    ,                     canActivate: [AuthGuard] },
  { path: 'report/:id'        , component: ReportFormComponent  ,                     canActivate: [AuthGuard] },
  { path: 'reports'           , component: ReportComponent      ,                     canActivate: [AuthGuard] },
  { path: 'referrals'         , component: ReferralComponent    ,                     canActivate: [AuthGuard] },
  { path: 'referral/:id'      , component: ReferralFormComponent,                     canActivate: [AuthGuard] },
  { path: 'referralpanel/:id' , component: ReferralPanelComponent,                    canActivate: [AuthGuard] },
  { path: 'dailylogpanel/:id' , component: DailyLogPanelComponent,                    canActivate: [AuthGuard] },
  { path: 'recommendation/:id', component: RecommendationPanelComponent,              canActivate: [AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
