import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }                      from '@angular/forms';
import { DailyLogFormComponent }             from './daily-log-form.component';
import { DailyLogService }                   from '../shared/dailylog.service';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';

describe('DailyLogFormComponent', () => {
  let component: DailyLogFormComponent;
  let fixture: ComponentFixture<DailyLogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ DailyLogFormComponent ],
      providers: [ DailyLogService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
