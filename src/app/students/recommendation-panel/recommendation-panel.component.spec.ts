import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }                      from '@angular/forms';
import { RecommendationService } from '../shared/recommendation.service'
import { RecommendationPanelComponent } from './recommendation-panel.component';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';

describe('RecommendationComponent', () => {
  let component: RecommendationPanelComponent;
  let fixture: ComponentFixture<RecommendationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      providers: [ RecommendationService ],
      declarations: [ RecommendationPanelComponent ]
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
