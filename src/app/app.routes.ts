import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

const APP_ROUTES: Routes = [

  { path: 'userLogin', component: LoginFormComponent }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
