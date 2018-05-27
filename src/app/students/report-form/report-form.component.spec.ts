import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }                      from '@angular/forms';
import { ReportFormComponent }             from './report-form.component';
import { ReportService }                   from '../shared/report.service';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';

describe('ReportFormComponent', () => {
  let component: ReportFormComponent;
  let fixture: ComponentFixture<ReportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ ReportFormComponent ],
      providers: [ ReportService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
