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

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    let teacherName
    this.route.queryParams.subscribe(params => {
      teacherName = params['username']
      this.teacherInfo = getTeacherInfo(teacherName)
      })
  }

}