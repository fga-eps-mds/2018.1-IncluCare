import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';

import { AuthService } from "../services/auth.service";
import { LoginComponent } from './login.component';
import { TutorialLoginComponent } from '../tutorial/tutorial-login/tutorial-login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        TutorialLoginComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        MaterializeModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
        { provide: Angular2TokenService, useValue: tokenMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
