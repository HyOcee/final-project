import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getStudentInfo } from 'src/app/data/get-data';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css',
      '../../../assets/styles/dashboard.css',
      '../../../assets/styles/dashboard_inner_styles.css']
})
export class ReportCardComponent implements OnInit {

  public studentInfo: any
  public studentName: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentName = params['username']
    })
    console.log(this.studentName)
    this.studentInfo = getStudentInfo(this.studentName)
  }

}
