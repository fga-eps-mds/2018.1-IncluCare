import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DailyLogComponent } from './daily-log.component';
import { StudentsService } from '../../services/students.service';

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
      providers: [ StudentsService ]
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
