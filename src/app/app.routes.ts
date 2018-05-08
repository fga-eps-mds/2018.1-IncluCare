import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AuthGuard }              from "./guards/auth.guard";

import { LoginComponent }         from "./login/login.component";
import { ProfileComponent }       from "./profile/profile.component";
import { StudentsComponent }      from './students/students.component';
import { StudentFormComponent }   from './students/student-form/student-form.component';
import { StudentPanelComponent } from './students/student-panel/student-panel.component'

const APP_ROUTES: Routes = [
  { path: '',                   component: LoginComponent,        pathMatch: 'full'                           },
  { path: 'login',              component: LoginComponent                                                     },
  { path: 'profile',            component: ProfileComponent,                          canActivate: [AuthGuard]},
  { path: 'students',           component: StudentsComponent,     pathMatch: 'full',  canActivate: [AuthGuard]},
  { path: 'students/new',       component: StudentFormComponent,                      canActivate: [AuthGuard]},
  { path: 'students/:id',       component: StudentFormComponent,                      canActivate: [AuthGuard]},
  { path: 'students/:id/edit',  component: StudentFormComponent,                      canActivate: [AuthGuard]},
  { path: 'panel',     component: StudentPanelComponent,                     }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
