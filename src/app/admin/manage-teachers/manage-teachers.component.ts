import { Component, OnInit } from '@angular/core';
import { getAllTeachers } from 'src/app/data/teachers';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.css',
  '../../../assets/styles/dashboard.css',
  '../../../assets/styles/dashboard_inner_styles.css']
})
export class ManageTeachersComponent implements OnInit {
  
  public allTeachers: any;
  public noOfTeachers!: number
  public school: any

  constructor() { }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    this.allTeachers = getAllTeachers()
    this.noOfTeachers = this.allTeachers.length

    
    this.school = sessionStorage.getItem('teachers')
  }

}
