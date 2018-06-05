import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AuthGuard }              from "./guards/auth.guard";
import { LoginGuard }             from "./guards/login.guard";
import { LoginComponent }         from "./login/login.component";
import { ProfileComponent }       from "./profile/profile.component";
import { StudentsComponent }      from './students/students.component';
import { StudentFormComponent }   from './students/student-form/student-form.component';
import { StudentPanelComponent }  from './students/student-panel/student-panel.component';
import { DailyLogComponent }      from './students/daily-log/daily-log.component';
import { DailyLogFormComponent }  from './students/daily-log-form/daily-log-form.component';
import { ReportComponent }        from './students/report/report.component';
import { ReportFormComponent }    from './students/report-form/report-form.component';
import {RecommendationsComponent} from './students/recommendations/recommendations.component';

const APP_ROUTES: Routes = [
  { path: ''                  , redirectTo: 'students'          , pathMatch: 'full'                            },
  { path: 'login'             , component: LoginComponent       ,                     canActivate: [LoginGuard]},
  { path: 'profile'           , component: ProfileComponent     ,                     canActivate: [AuthGuard] },
  { path: 'students'          , component: StudentsComponent    , pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: 'students/new'      , component: StudentFormComponent ,                     canActivate: [AuthGuard] },
  { path: 'students/:id'      , component: StudentFormComponent ,                     canActivate: [AuthGuard] },
  { path: 'students/:id/edit' , component: StudentFormComponent ,                     canActivate: [AuthGuard] },
  { path: 'panel/:id'         , component: StudentPanelComponent,                     canActivate: [AuthGuard] },
  { path: 'dailylog/:id'      , component: DailyLogFormComponent,                     canActivate: [AuthGuard] },
  { path: 'dailylogs'         , component: DailyLogComponent    ,                     canActivate: [AuthGuard] },
  { path: 'report/:id'        , component: ReportFormComponent  ,                     canActivate: [AuthGuard] },
  { path: 'reports'           , component: ReportComponent      ,                     canActivate: [AuthGuard] },
  { path: 'recommendation'    , component: RecommendationsComponent,                  canActivate: [AuthGuard  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
