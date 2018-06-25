import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../shared/services/auth.service";
import { TeamMember }  from "../../shared/models/team-member.model";
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  private teamMember: TeamMember[] = [];

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getTeamMembers()
    .subscribe(
      data => this.teamMember = data,
      response => {}
    );
  }

  getTeamMembers() {
    return this.teamMember;
  }

  deleteTeamMember(teamMember) {
    if (confirm("Você tem certeza que quer deletar o membro " + teamMember.name + "?")) {
      this.authService.deleteTeamMember(teamMember.id).subscribe(null);
    }
  }

}
