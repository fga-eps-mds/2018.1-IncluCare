import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { StudentsComponent } from './students.component';
import { AuthService } from "../services/auth.service";
import { StudentsService } from '../services/students.service';
import { FilterClassPipe } from "./shared/filter-class.pipe";

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);
    TestBed.configureTestingModule({
      declarations: [ StudentsComponent,
      FilterClassPipe ],
      imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        StudentsService,
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
