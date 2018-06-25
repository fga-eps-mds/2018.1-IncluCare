import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Student, DailyLog, Report, Recommendation, Referral,  } from '../shared/models';
import { StudentsService } from './students.service';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpMock: HttpTestingController;
  let backend: MockBackend;
  let studentService: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpModule
      ],
      providers: [
        StudentsService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });

    service = TestBed.get(StudentsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should get student data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [
         { id: 1,
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
         parent_telephone: 444122323 }
       ]
    }

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.getStudent(1).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should get daily log data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [
         { id: 9,
         date: '12-8-1998',
         activity: 'natacao',
         note: 'dificuldade no nado borboleta',
         student_id: 9 }
       ]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.getDailyLog(9).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should get report data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
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
         student_id: 9 }
       ]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.getReport(9).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should delete Report 1 data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [
         { id: 1 }
          ]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.deleteReport(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should delete Student 1 data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [
         { id: 1 }
          ]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.deleteStudent(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should delete DailyLog 1 data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [
         { id: 1 }
          ]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.deleteDailyLog(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('addStudent should return a promise', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [{
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
      parent_telephone: 444122323
    }]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.addStudent(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('addDailyLog should return a promise', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [{
      id: 9,
      date: '12-8-1998',
      activity: 'natacao',
      note: 'dificuldade no nado borboleta',
      student_id: 9
    }]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.addDailyLog(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should add referral', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [{
        id: 1,
        title: 'Encaminhamento 1',
        body: 'Para Familia',
        created_by: 'user',
        updated_by: 'user',
        student_id: 1
    }]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.addReferral(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('addReport should return a promise', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [{
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
    }]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.addReport(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should update student 445 data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [{
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
      parent_telephone: 444122323
    }]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.updateStudent(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should update report 9 data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [{
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
    }]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.updateReport(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should update daily log 9 data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
    const mockResponse = {
    data: [{
      id: 9,
      date: '12-8-1998',
      activity: 'natacao',
      note: 'dificuldade no nado borboleta',
      student_id: 9
    }]
    }
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response( new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    studentDataService.updateDailyLog(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
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

    //Referral
    it('should get referral id', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
      const mockResponse = {
      data: [{
        id: 1,
        title: 'Titulo 1',
        body: 'Ao professor 1',
        student: 'Joao',
        student_id: ''
      }]
      }
      backend.connections.subscribe(connection => {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      studentDataService.getReferral(1).subscribe((res) => {
        expect(res).toBeDefined();
      });
    }));

    it('should update referral', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
      const mockResponse = {
      data: [{
        id: 9,
        title: '',
        body: '',
        student: 'Joao',
        student_id: 9
      }]
      }
      backend.connections.subscribe(connection => {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      studentDataService.updateReferral(mockResponse.data).subscribe((res) => {
        expect(res).toBeDefined();
      });
    }));

    it('should delete referral', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
      const mockResponse = {
      data: [{
        id: 9
      }]
      }
      backend.connections.subscribe(connection => {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      studentDataService.deleteReferral(mockResponse.data).subscribe((res) => {
        expect(res).toBeDefined();
      });
    }));

    //Recommendation
    it('should update recommendation data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
      const mockResponse = {
      data: [{
        id: 9
      }]
      }
      backend.connections.subscribe(connection => {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      studentDataService.getRecommendation(mockResponse.data).subscribe((res) => {
        expect(res).toBeDefined();
      });
    }));

    it('should update recommendation data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
      const mockResponse = {
      data: [{
        id: 9,
        title: '',
        body: '',
        student: 'Joao',
        student_id: ''
      }]
      }
      backend.connections.subscribe(connection => {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      studentDataService.updateRecommendation(mockResponse.data).subscribe((res) => {
        expect(res).toBeDefined();
      });
    }));

    it('should create recommendation data', inject([StudentsService, XHRBackend], (studentDataService, backend) => {
      const mockResponse = {
      data: [{
        id: 9,
        title: '',
        body: '',
        student: 'Joao',
        student_id: ''
      }]
      }
      backend.connections.subscribe(connection => {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      studentDataService.createRecommendation(mockResponse.data).subscribe((res) => {
        expect(res).toBeDefined();
      });
    }));

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
