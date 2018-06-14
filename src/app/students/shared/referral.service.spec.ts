import { TestBed, inject }                                   from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController }    from '@angular/common/http/testing';
import { RouterTestingModule }                               from '@angular/router/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection }                       from '@angular/http/testing';
import { ReferralService }                                  from './referral.service'
import { Referral }                                          from './referral'

describe('ReferralnService', () => {
  let service: ReferralService;
  let httpMock: HttpTestingController;
  let backend: MockBackend;
  let referralService: ReferralService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
                 HttpModule
               ],
      providers: [ReferralService, { provide: XHRBackend, useClass: MockBackend }]
    });

    service = TestBed.get(ReferralService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should get referral id', inject([ReferralService, XHRBackend], (referralDataService, backend) => {
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
    referralDataService.getReferral(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should add referral', inject([ReferralService, XHRBackend], (referralDataService, backend) => {
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
    referralDataService.addReferral(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should update referral', inject([ReferralService, XHRBackend], (referralDataService, backend) => {
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
    referralDataService.updateReferral(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should delete referral', inject([ReferralService, XHRBackend], (referralDataService, backend) => {
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
    referralDataService.deleteReferral(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

});
