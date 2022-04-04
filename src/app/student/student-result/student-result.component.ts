import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { getStudentInfo} from 'src/app/data/get-data';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css',
      '../../../assets/styles/dashboard.css',
      '../../../assets/styles/dashboard_inner_styles.css']
})

export class StudentResultComponent implements OnInit {
  public studentInfo: any
  public studentName: any

  printResult() {
    window.print()
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentName = params['username']
    })
    this.studentInfo = getStudentInfo(this.studentName)
  }
}
