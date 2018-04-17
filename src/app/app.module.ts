import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routes';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { RegisterService } from './service/register/register.service';




@NgModule({
  declarations: [
    AppComponent,
    TeamMemberComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    Routing,
    MaterializeModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
