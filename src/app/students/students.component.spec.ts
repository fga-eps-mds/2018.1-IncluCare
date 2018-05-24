import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Angular2TokenService }             from 'angular2-token';
import { StudentsComponent } from './students.component';
import { StudentService } from './shared/student.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule }              from '@angular/router/testing';
import { AuthService }                      from "../services/auth.service";
<<<<<<< HEAD
import { FilterStudentClass }                       from "./filterStudentClass.pipe";
=======
import { FilterPipe }                       from "./filter.pipe";
>>>>>>> 6c59d745eaf74331e3557c0098c608d88b124acf

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);
    TestBed.configureTestingModule({
      declarations: [ StudentsComponent,
<<<<<<< HEAD
      FilterStudentClass ],
=======
      FilterPipe ],
>>>>>>> 6c59d745eaf74331e3557c0098c608d88b124acf
      imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        StudentService,
        AuthService,
        {provide: Angular2TokenService, useValue: tokenMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
