import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { StudentService } from './student.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule,
                 RouterTestingModule
               ],
      providers: [StudentService]
    });
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
});
