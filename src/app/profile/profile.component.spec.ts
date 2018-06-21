import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';
import { MaterializeModule } from 'angular2-materialize';

import { ProfileComponent } from './profile.component';
import { AuthService } from "../shared/services/auth.service";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FormsModule,
        MaterializeModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ ProfileComponent ],
      providers:[
        AuthService,
        {provide: Angular2TokenService, useValue: tokenMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
