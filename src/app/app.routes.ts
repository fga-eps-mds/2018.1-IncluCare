import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TeamMemberComponent } from './team-member/team-member.component';

const APP_ROUTES: Routes = [

  { path: 'teamMember', component: TeamMemberComponent }

]



export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
