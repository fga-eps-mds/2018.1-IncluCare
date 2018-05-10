import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule }    from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2TokenService }             from 'angular2-token';
import { MaterializeModule }                from 'angular2-materialize';

import { AppComponent }           from './app.component';

import { AuthService }                      from "./services/auth.service";
import { ToolbarComponent }       from './toolbar/toolbar.component';
import { AuthDialogComponent }    from './register/auth-dialog/auth-dialog.component';
import { RegisterFormComponent }  from './register/register-form/register-form.component';

describe('AppComponent', ()=> {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['init', 'validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        AuthDialogComponent,
        RegisterFormComponent
      ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MaterializeModule
      ],
      providers: [
        AuthService,
        {provide: Angular2TokenService, useValue: tokenMock}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
