import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

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

  it('getUser should return a promise', inject([StudentsService], (service: StudentsService) => {
    const userID = 1;

    const promise = service.getStudent(userID);
    expect(promise).toBeDefined();
  }));

});
