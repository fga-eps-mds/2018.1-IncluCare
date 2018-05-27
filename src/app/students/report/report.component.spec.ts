import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule }                       from '@angular/http';
import { StudentService }                   from '../shared/student.service';
import { RouterTestingModule }              from '@angular/router/testing';
import { FormsModule }                      from '@angular/forms';
import { ReportService }                  from '../shared/report.service';

import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:  [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ ReportComponent ],
      providers: [ReportService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
