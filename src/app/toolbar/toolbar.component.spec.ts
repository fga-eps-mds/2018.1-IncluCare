import { async,inject,ComponentFixture, TestBed } from '@angular/core/testing';
import { Angular2TokenService }             from 'angular2-token';
import { MaterializeAction } from "angular2-materialize";
import { AuthService }                      from "../services/auth.service";
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule }              from '@angular/router/testing';
import { AuthDialogComponent } from "../login/auth-dialog/auth-dialog.component";
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent],
      imports:[
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MaterializeAction
      ],
      providers: [AuthService,
        {provide: Angular2TokenService, useValue: tokenMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
