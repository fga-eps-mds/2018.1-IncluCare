import { TestBed, inject }                                   from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController }    from '@angular/common/http/testing';
import { RouterTestingModule }                               from '@angular/router/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection }                       from '@angular/http/testing';
import { RecommendationService }                             from './recommendation.service'
import { RecommendationData }                                from './recommendationData'

describe('RecommendationService', () => {
  let service: RecommendationService;
  let httpMock: HttpTestingController;
  let backend: MockBackend;
  let recommendationService: RecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
                 HttpModule
               ],
      providers: [RecommendationService, { provide: XHRBackend, useClass: MockBackend }]
    });

    service = TestBed.get(RecommendationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('getRecommendation should return a promise', inject([RecommendationService], (service: RecommendationService) => {
    const userID = 1;

    const promise = service.getRecommendation(userID);
    expect(promise).toBeDefined();
  }));

  it('should update recommendation data', inject([RecommendationService, XHRBackend], (recommendationDataService, backend) => {
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
    recommendationDataService.updateRecommendation(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should create recommendation data', inject([RecommendationService, XHRBackend], (recommendationDataService, backend) => {
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
    recommendationDataService.createRecommendation(mockResponse.data).subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

});
