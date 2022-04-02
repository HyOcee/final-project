import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/data/students';
import { StudentComponent } from 'src/app/student/student.component';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css',
  '../../../assets/styles/dashboard.css',
  '../../../assets/styles/dashboard_inner_styles.css']
})
export class ManageStudentsComponent implements OnInit {
  public allStudents: any = []
  public total: number = 0

  constructor() { }

  ngOnInit(): void {
    let studentsFromSessionStorage = JSON.parse(sessionStorage.getItem('students')!)
    for (let klass in studentsFromSessionStorage){
      for(let student of studentsFromSessionStorage[klass]){
        this.allStudents.push(student)
        this.total++
      }
    }
    console.log(this.allStudents)
  }

}
