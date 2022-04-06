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
  public school: any

  public marksObtainable: number = 0
  public marksObtained: number = 0

  printResult() {
    window.print()
  }

  constructor(private route: ActivatedRoute) { }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    this.school = JSON.parse(sessionStorage.getItem('schools')!)
    this.route.queryParams.subscribe(params => {
      this.studentName = params['username']
    })
    this.studentInfo = getStudentInfo(this.studentName)
    for(let subject of this.studentInfo.subjectsOfferred){
      subject.totalScore = subject.testScore + subject.examScore
      this.marksObtainable += 100;
      this.marksObtained += subject.totalScore
    }
  }
}
