import { Component, OnInit } from '@angular/core';
import { ReportService }        from '../shared/report.service';
import { Report }                 from "../shared/report";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

   private reports: Report[] = [];

  constructor(
    private reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reportService.getReports()
      .subscribe(
         data => this.reports = data,
         response => {}
        );
  }

  getReports() {
    return this.reports;
  }

}
