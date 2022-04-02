import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { getTeacherInfo } from 'src/app/data/teachers';
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css',
          '../../../assets/styles/dashboard.css',
          '../../../assets/styles/dashboard_inner_styles.css']
})
export class TeacherProfileComponent implements OnInit {

  public teacherInfo: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let teacherName
    this.route.queryParams.subscribe(params => {
      teacherName = params['username']
      this.teacherInfo = getTeacherInfo(teacherName)
      })
  }

}