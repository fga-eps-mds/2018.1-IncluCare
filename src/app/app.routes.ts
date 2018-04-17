import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule }   from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './students/student-form/student-form.component';

const APP_ROUTES: Routes = [
  { path: 'students', pathMatch: 'full', component: StudentsComponent },
  { path: 'students/new', component: StudentFormComponent},
  { path: 'students/:id', component: StudentFormComponent},
  { path: 'students/:id/edit', component: StudentFormComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
