import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { ReferralFormComponent } from './referral-form.component';
import { AuthService } from '../../shared/services/auth.service';
import { StudentsService } from '../../shared/services/students.service';

describe('ReferralFormComponent', () => {
  let component: ReferralFormComponent;
  let fixture: ComponentFixture<ReferralFormComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ ReferralFormComponent ],
      providers: [
        AuthService,
        StudentsService,
        {provide: Angular2TokenService, useValue: tokenMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
