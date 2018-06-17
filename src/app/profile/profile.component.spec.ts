import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule }                       from '@angular/http';
import { NO_ERRORS_SCHEMA }                 from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule }              from '@angular/router/testing';

import { Angular2TokenService }             from 'angular2-token';

import { ProfileComponent }                 from './profile.component';
import { AuthService }                      from "../services/auth.service";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers:[
        AuthService,
        {provide: Angular2TokenService, useValue: tokenMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
