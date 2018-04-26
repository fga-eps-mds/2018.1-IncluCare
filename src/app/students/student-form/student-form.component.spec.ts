import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form.component';
import { StudentService } from '../shared/student.service';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudentFormComponent', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
                 HttpModule,
                 RouterTestingModule
               ],
      declarations: [ StudentFormComponent ],
      providers: [StudentService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
