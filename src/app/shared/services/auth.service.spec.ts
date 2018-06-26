import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { Angular2TokenService } from 'angular2-token';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(async() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({

      imports:[
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [AuthService,
        {provide: Angular2TokenService, useValue: tokenMock}
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
