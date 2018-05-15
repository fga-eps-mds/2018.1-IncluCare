import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberPanelComponent } from './team-member-panel.component';

describe('TeamMemberPanelComponent', () => {
  let component: TeamMemberPanelComponent;
  let fixture: ComponentFixture<TeamMemberPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
