import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { AdminPageComponent } from './profile/admin-page/admin-page.component';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentPanelComponent } from './students/student-panel/student-panel.component';
import { DailyLogComponent } from './students/daily-log/daily-log.component';
import { DailyLogFormComponent } from './students/daily-log-form/daily-log-form.component';
import { DailyLogPanelComponent } from './students/daily-log-panel/daily-log-panel.component';
import { ReferralComponent } from './students/referral/referral.component';
import { ReferralFormComponent } from './students/referral-form/referral-form.component';
import { ReferralPanelComponent } from './students/referral-panel/referral-panel.component';
import { ReportComponent } from './students/report/report.component';
import { ReportFormComponent } from './students/report-form/report-form.component';
import { RecommendationPanelComponent } from './students/recommendation-panel/recommendation-panel.component';
import { TutorialComponent }            from './tutorial/tutorial.component';

import { AuthGuard }                    from "./shared/guards/auth.guard";
import { LoginGuard }                   from "./shared/guards/login.guard";

const ROUTES = RouterModule.forRoot([
  { path: ''                  , redirectTo: 'students'            , pathMatch: 'full'                            },
  { path: 'login'             , component: LoginComponent         ,                     canActivate: [LoginGuard]},
  { path: 'profile'           , component: ProfileComponent       ,                     canActivate: [AuthGuard] },
  { path: 'admin'             , component: AdminPageComponent     ,                     canActivate: [AuthGuard] },
  { path: 'students'          , component: StudentsComponent      , pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: 'students/new'      , component: StudentFormComponent   ,                     canActivate: [AuthGuard] },
  { path: 'studentpanel/:id'  , component: StudentPanelComponent  ,                     canActivate: [AuthGuard] },
  { path: 'dailylogs/:id'     , component: DailyLogComponent      ,                     canActivate: [AuthGuard] },
  { path: 'dailylog/:id'      , component: DailyLogFormComponent  ,                     canActivate: [AuthGuard] },
  { path: 'dailylogpanel/:id' , component: DailyLogPanelComponent ,                     canActivate: [AuthGuard] },
  { path: 'referrals/:id'     , component: ReferralComponent      ,                     canActivate: [AuthGuard] },
  { path: 'referral/:id'      , component: ReferralFormComponent  ,                     canActivate: [AuthGuard] },
  { path: 'referralpanel/:id' , component: ReferralPanelComponent ,                     canActivate: [AuthGuard] },
  { path: 'report/:id'        , component: ReportFormComponent    ,                     canActivate: [AuthGuard] },
  { path: 'reports'           , component: ReportComponent        ,                     canActivate: [AuthGuard] },
  { path: 'recommendation/:id', component: RecommendationPanelComponent,                canActivate: [AuthGuard] },
  { path: 'tutorial'          , component: TutorialComponent,                           canActivate: [AuthGuard] }
])

@NgModule({
  imports: [ROUTES],
  exports: [RouterModule]
})
export class AppRouterModule {}
