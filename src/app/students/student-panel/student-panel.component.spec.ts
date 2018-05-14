import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentService }                   from '../shared/student.service';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';
import { StudentPanelComponent } from './student-panel.component';
import { FormsModule }                      from '@angular/forms';

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
      providers: [ StudentService ]
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
