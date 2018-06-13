import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';
import { FormsModule }                      from '@angular/forms';

import { StudentsService }                   from '../../services/students.service';

import { ReferralComponent } from './referral.component';

describe('ReferralComponent', () => {
  let component: ReferralComponent;
  let fixture: ComponentFixture<ReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:  [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ ReferralComponent ],
      providers: [StudentsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
