import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyLogService }                   from '../shared/dailylog.service';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';
import { DailyLogPanelComponent } from './daily-log-panel.component';
import { FormsModule }                      from '@angular/forms';

describe('DailyLogPanelComponent', () => {
  let component: DailyLogPanelComponent;
  let fixture: ComponentFixture<DailyLogPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ DailyLogPanelComponent ],
      providers: [ DailyLogService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLogPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
