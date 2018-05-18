import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AuthGuard }              from "./guards/auth.guard";
import { LoginGuard }              from "./guards/login.guard";
import { LoginComponent }         from "./login/login.component";
import { ProfileComponent }       from "./profile/profile.component";
import { StudentsComponent }      from './students/students.component';
import { StudentFormComponent }   from './students/student-form/student-form.component';
import { StudentPanelComponent } from './students/student-panel/student-panel.component';
import { DailyLogComponent } from './students/daily-log/daily-log.component';
import { DailyLogFormComponent } from './students/daily-log-form/daily-log-form.component';

const APP_ROUTES: Routes = [
  { path: ''                  , redirectTo: 'students'          , pathMatch: 'full'                           },
  { path: 'login'             , component: LoginComponent       ,                     canActivate: [LoginGuard]},
  { path: 'profile'           , component: ProfileComponent     ,                     canActivate: [AuthGuard]},
  { path: 'students'          , component: StudentsComponent    , pathMatch: 'full' , canActivate: [AuthGuard]},
  { path: 'students/new'      , component: StudentFormComponent ,                     canActivate: [AuthGuard]},
  { path: 'students/:id'      , component: StudentFormComponent ,                     canActivate: [AuthGuard]},
  { path: 'students/:id/edit' , component: StudentFormComponent ,                     canActivate: [AuthGuard]},
  { path: 'panel/:id',     component: StudentPanelComponent,                     },
  { path: 'dailylogs', component: DailyLogComponent,                 },
  { path: 'dailylogs/new', component: DailyLogFormComponent,         },
  { path: 'dailylogs/:id', component: DailyLogFormComponent,         }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
