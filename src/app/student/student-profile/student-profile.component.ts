import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap} from '@angular/router';

import { getStudentInfo} from 'src/app/data/get-data';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css',
        '../../../assets/styles/dashboard.css',
        '../../../assets/styles/dashboard_inner_styles.css']
})
export class StudentProfileComponent implements OnInit {
  public studentInfo: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let studentNameData = params.get('username')
      console.log(studentNameData)
      this.studentInfo = getStudentInfo(studentNameData)
    })
  }

}
