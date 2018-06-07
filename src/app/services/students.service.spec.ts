import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { StudentsService } from './students.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule,
                 RouterTestingModule
               ],
      providers: [StudentsService]
    });
  });

  it('should be created', inject([StudentsService], (service: StudentsService) => {
    expect(service).toBeTruthy();
  }));
});
