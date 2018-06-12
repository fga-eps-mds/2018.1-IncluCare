import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DailyLogFormComponent } from './daily-log-form.component';
import { StudentsService } from '../../services/students.service';

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
      providers: [ StudentsService ]
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
