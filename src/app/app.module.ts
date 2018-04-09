import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app.routes';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { TeamMemberComponent } from './team-member/team-member.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
