import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { Student, DailyLog, Report } from '../shared/models'
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpMock: HttpTestingController;
  let backend: MockBackend;
  let studentService: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
                 HttpModule
               ],
      providers: [StudentsService, { provide: XHRBackend, useClass: MockBackend }]
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
    const data: Student = {
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
    const promise = service.addStudent(data);
    expect(promise).toBeDefined();
  }));

  it('addDailyLog should return a promise', inject([StudentsService], (service: StudentsService) => {
    const data: DailyLog = {
      id: 9,
      date: '12-8-1998',
      activity: 'natacao',
      note: 'dificuldade no nado borboleta',
      student_id: 9,

    };
    const promise = service.addDailyLog(data);
    expect(promise).toBeDefined();
  }));

  it('addReport should return a promise', inject([StudentsService], (service: StudentsService) => {
    const data: Report = {
      id: 9,
      init_date: '12-8-1998',
      end_date: '12-8-1999',
      school_phone: '999999999',
      member_name: '88888888',
      school_name: 'escola do riacho',
      reason: '',
      general_information: '',
      synthesis: '',
      conclusion: '',
      family_orientation: '',
      school_orientation: '',
      pedagogue_name: '',
      pedagogue_function: '',
      pedagogue_registry: '',
      psycholog_name: '',
      psycholog_function: '',
      psycholog_registry: '',
      reason_adequation: true,
      reason_emotional: true,
      reason_performance: true,
      reason_behavior: true,
      reason_language: true,
      level_school: true,
      level_family: true,
      level_student: true,
      envolved_school: '',
      envolved_family: '',
      envolved_student: '',
      realized_actions: '',
      possibly_saa: true,
      possibly_eeaa: true,
      possibly_resources: true,
      possibly_adequation: true,
      student_id: 9,

    };
    const promise = service.addReport(data);
    expect(promise).toBeDefined();
  }));

  it('updateStudent should return a promise', inject([StudentsService], (service: StudentsService) => {
    const data: Student = {
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
    const promise = service.updateStudent(data);
    expect(promise).toBeDefined();
  }));

  it('updateReport should return a promise', inject([StudentsService], (service: StudentsService) => {
    const data: Report = {
      id: 9,
      init_date: '12-8-1998',
      end_date: '12-8-1999',
      school_phone: '999999999',
      member_name: '88888888',
      school_name: 'escola do riacho',
      reason: '',
      general_information: '',
      synthesis: '',
      conclusion: '',
      family_orientation: '',
      school_orientation: '',
      pedagogue_name: '',
      pedagogue_function: '',
      pedagogue_registry: '',
      psycholog_name: '',
      psycholog_function: '',
      psycholog_registry: '',
      reason_adequation: true,
      reason_emotional: true,
      reason_performance: true,
      reason_behavior: true,
      reason_language: true,
      level_school: true,
      level_family: true,
      level_student: true,
      envolved_school: '',
      envolved_family: '',
      envolved_student: '',
      realized_actions: '',
      possibly_saa: true,
      possibly_eeaa: true,
      possibly_resources: true,
      possibly_adequation: true,
      student_id: 9,

    };
    const promise = service.updateReport(data);
    expect(promise).toBeDefined();
  }));

  it('updateDailyLog should return a promise', inject([StudentsService], (service: StudentsService) => {
    const data: DailyLog = {
      id: 9,
      date: '12-8-1998',
      activity: 'natacao',
      note: 'dificuldade no nado borboleta',
      student_id: 9,

    };
    const promise = service.updateDailyLog(data);
    expect(promise).toBeDefined();
  }));

  it('should get students data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [
         { id: 445,
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
         parent_telephone: 444122323 },
         { id: 1, name: 'Video 1' },

       ]
    }

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.getStudents().subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should get daily logs data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [
         { id: 9,
         date: '12-8-1998',
         activity: 'natacao',
         note: 'dificuldade no nado borboleta',
         student_id: 9 },
         { id: 1, name: 'Video 1' },

       ]
    }

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.getDailyLogs().subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should get reports data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [
         { id: 9,
         init_date: '12-8-1998',
         end_date: '12-8-1999',
         school_phone: '999999999',
         member_name: '88888888',
         school_name: 'escola do riacho',
         reason: '',
         general_information: '',
         synthesis: '',
         conclusion: '',
         family_orientation: '',
         school_orientation: '',
         pedagogue_name: '',
         pedagogue_function: '',
         pedagogue_registry: '',
         psycholog_name: '',
         psycholog_function: '',
         psycholog_registry: '',
         reason_adequation: true,
         reason_emotional: true,
         reason_performance: true,
         reason_behavior: true,
         reason_language: true,
         level_school: true,
         level_family: true,
         level_student: true,
         envolved_school: '',
         envolved_family: '',
         envolved_student: '',
         realized_actions: '',
         possibly_saa: true,
         possibly_eeaa: true,
         possibly_resources: true,
         possibly_adequation: true,
         student_id: 9 },
         { id: 1, name: 'Video 1' },

       ]
    }

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.getReports().subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

});
