import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule }              from '@angular/router/testing';
import { Angular2TokenService }             from 'angular2-token';
import { AuthService }                      from "../../services/auth.service";
import { LoginFormComponent }               from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [
        HttpModule,
        FormsModule,
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
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
