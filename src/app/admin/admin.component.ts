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

  ngOnInit(): void {
    if(!sessionStorage.getItem('teachers')) sessionStorage.setItem('teachers',JSON.stringify(teachers))
  }

}
