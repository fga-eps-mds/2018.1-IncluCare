import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { Student } from '../shared/models'

describe('StudentsService', () => {
  let service: StudentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
                 HttpModule
               ],
      providers: [StudentsService]
    });

    service = TestBed.get(StudentsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('getStudent should return a promise', inject([StudentsService], (service: StudentsService) => {
    const userID = 1;

    const promise = service.getStudent(userID);
    expect(promise).toBeDefined();
  }));

  it('getDailyLog should return a promise', inject([StudentsService], (service: StudentsService) => {
    const userID = 1;

    const promise = service.getDailyLog(userID);
    expect(promise).toBeDefined();
  }));

  it('getReport should return a promise', inject([StudentsService], (service: StudentsService) => {
    const userID = 1;

    const promise = service.getReport(userID);
    expect(promise).toBeDefined();
  }));

  it('deleteReport should return a promise', inject([StudentsService], (service: StudentsService) => {
    const userID = 1;

    const promise = service.deleteReport(userID);
    expect(promise).toBeDefined();
  }));

  it('deleteStudent should return a promise', inject([StudentsService], (service: StudentsService) => {
    const userID = 1;

    const promise = service.deleteStudent(userID);
    expect(promise).toBeDefined();
  }));

  it('deleteDailyLog should return a promise', inject([StudentsService], (service: StudentsService) => {
    const userID = 1;

    const promise = service.deleteDailyLog(userID);
    expect(promise).toBeDefined();
  }));

  it('addStudent should return a promise', inject([StudentsService], (service: StudentsService) => {
    const user: Student = {
      id: 445,
      name: 'adalberto',
      birth_date: '12-12-1929',
      age: 18,
      year: 9,
      student_class: 'a',
      shift: 'matutino',
      nationality: 'brasileiro',
      father_name: 'jair',
      mother_name: 'edineia',
      responsible: 'responsavel',
      address: 'riacho fundo',
      parent_telephone: 444122323,

    };
    const promise = service.addStudent(user);
    expect(promise).toBeDefined();
  }));

});
