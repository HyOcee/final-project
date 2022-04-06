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
  public school: any

  printResult() {
    window.print()
  }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.school = JSON.parse(sessionStorage.getItem('schools')!)
    this.route.queryParams.subscribe(params => {
      this.studentName = params['username']
    })
    this.studentInfo = getStudentInfo(this.studentName)
  }
}
