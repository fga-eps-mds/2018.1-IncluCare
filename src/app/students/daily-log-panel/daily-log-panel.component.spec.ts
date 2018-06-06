import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLogPanelComponent } from './daily-log-panel.component';

describe('DailyLogPanelComponent', () => {
  let component: DailyLogPanelComponent;
  let fixture: ComponentFixture<DailyLogPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyLogPanelComponent ]
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
