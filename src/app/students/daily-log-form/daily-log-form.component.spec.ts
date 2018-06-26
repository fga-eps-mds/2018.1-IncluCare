import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { DailyLogFormComponent } from './daily-log-form.component';
import { AuthService } from '../../shared/services/auth.service';
import { StudentsService } from '../../shared/services/students.service';

describe('DailyLogFormComponent', () => {
  let component: DailyLogFormComponent;
  let fixture: ComponentFixture<DailyLogFormComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ DailyLogFormComponent ],
      providers: [
        AuthService,
        StudentsService,
        {provide: Angular2TokenService, useValue: tokenMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
