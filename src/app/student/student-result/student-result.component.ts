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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let studentNameData = params.get('username')
      this.studentInfo = getStudentInfo(studentNameData)
    })
    console.log(this.studentInfo.subjectsOfferred)
  }

}
