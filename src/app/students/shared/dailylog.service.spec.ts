import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DailyLogService }  from './dailylog.service';

describe('DailyLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule,
                 RouterTestingModule
               ],
      providers: [DailyLogService]
    });
  });

  it('should be created', inject([DailyLogService], (service: DailyLogService) => {
    expect(service).toBeTruthy();
  }));
});
