import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule }                       from '@angular/http';
import { StudentService }                   from '../shared/student.service';
import { RouterTestingModule }              from '@angular/router/testing';
import { FormsModule }                      from '@angular/forms';
import { DailyLogService }                  from '../shared/dailylog.service';

import { DailyLogComponent } from './daily-log.component';

describe('DailyLogComponent', () => {
  let component: DailyLogComponent;
  let fixture: ComponentFixture<DailyLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:  [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ DailyLogComponent ],
      providers: [DailyLogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
