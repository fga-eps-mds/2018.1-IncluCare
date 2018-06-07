import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReferralService }  from './referral.service';

describe('ReferralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule,
                 RouterTestingModule
               ],
      providers: [ReferralService]
    });
  });

  it('should be created', inject([ReferralService], (service: ReferralService) => {
    expect(service).toBeTruthy();
  }));
});
