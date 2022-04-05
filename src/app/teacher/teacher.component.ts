import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { getTeacherInfo } from '../data/teachers';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css',
        '../../assets/styles/dashboard.css',
        '../../assets/styles/dashboard_inner_styles.css']
})
export class TeacherComponent implements OnInit {

  public teacherName: any
  

  constructor(private route: ActivatedRoute) { }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.teacherName = params['username']
      console.log(this.teacherName)
      })

      
    }
  }
