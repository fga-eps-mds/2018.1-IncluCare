import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { StudentsService } from '../../services/students.service'
import { RecommendationPanelComponent } from './recommendation-panel.component';

describe('RecommendationComponent', () => {
  let component: RecommendationPanelComponent;
  let fixture: ComponentFixture<RecommendationPanelComponent>;

  beforeEach(async(() => {
    let tokenMock = jasmine.createSpyObj('tokenMock', ['validateToken', 'subscribe']);
    tokenMock.validateToken.and.returnValue(tokenMock);

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ RecommendationPanelComponent ],
      providers: [
        StudentsService,
        {provide: Angular2TokenService, useValue: tokenMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
