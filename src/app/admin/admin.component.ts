import { Component, OnInit } from '@angular/core';
import { teachers } from '../data/teachers';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',
        '../../assets/styles/dashboard.css']
})
export class AdminComponent implements OnInit {

  public registerPersonsActive: any = false
  public schoolManagerActive: any = false
  public resultsActive: any = false

  public school: any

  toggleRegisterPersons(){
    if(this.registerPersonsActive === false) {
      this.registerPersonsActive = true
    } else {
      this.registerPersonsActive = false
    }
  }

  toggleSchoolManagerActive(){
    if(this.schoolManagerActive === false) {
      this.schoolManagerActive = true
    } else {
      this.schoolManagerActive = false
    }
  }

  toggleResultsActive(){
    if(this.resultsActive === false) {
      this.resultsActive = true
    } else {
      this.resultsActive = false
    }
  }

  constructor() { }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    if(!sessionStorage.getItem('teachers')) sessionStorage.setItem('teachers',JSON.stringify(teachers))
    this.school = sessionStorage.getItem('teachers')
  }

}
