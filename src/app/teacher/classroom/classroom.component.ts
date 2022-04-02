import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { getTeacherInfo } from 'src/app/data/teachers';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css',
          '../../../assets/styles/dashboard.css',
          '../../../assets/styles/dashboard_inner_styles.css']
})
export class ClassroomComponent implements OnInit {

  public teacherInfo: any
  public myStudents: any = []
  public totalStudents: any = 0

  constructor(private route: ActivatedRoute) { }

  displayStudents(subjectRequested: any){
    this.myStudents = []
    let studentsFromSessionStorage = JSON.parse(sessionStorage.getItem('students')!)
    for (let klass in studentsFromSessionStorage){
      for(let student of studentsFromSessionStorage[klass]){
        for(let subject of student.subjectsOfferred){
          if(subject.subject.toLowerCase() === subjectRequested.toLowerCase()){
            this.myStudents.push(student)
          }
        }
      }
    }
      console.log(this.myStudents)
      this.totalStudents = this.myStudents.length
  }

  ngOnInit(): void {
    let teacherName
    this.route.queryParams.subscribe(params => {
      teacherName = params['username']
      this.teacherInfo = getTeacherInfo(teacherName)
      })
  }

}
