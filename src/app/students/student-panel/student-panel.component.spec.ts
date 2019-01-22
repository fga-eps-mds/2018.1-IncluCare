import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StudentPanelComponent } from './student-panel.component';
import { StudentsService } from '../../shared/services/students.service';

describe('StudentPanelComponent', () => {
  let component: StudentPanelComponent;
  let fixture: ComponentFixture<StudentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ StudentPanelComponent ],
      providers: [ StudentsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
