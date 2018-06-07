import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReferralService }                   from '../shared/referral.service';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';
import { ReferralPanelComponent } from './referral-panel.component';
import { FormsModule }                      from '@angular/forms';
import * as jsPDF from 'jspdf';

describe('ReferralPanelComponent', () => {
  let component: ReferralPanelComponent;
  let fixture: ComponentFixture<ReferralPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ ReferralPanelComponent ],
      providers: [ ReferralService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
