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

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.teacherName = params['username']
      console.log(this.teacherName)
      })

      
    }
  }
