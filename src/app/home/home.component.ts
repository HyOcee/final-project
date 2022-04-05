import { Component, OnInit } from '@angular/core';
import { students } from '../data/students';
import { teachers } from '../data/teachers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../assets/styles/styles_0.css','../../assets/styles/styles_home.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(!sessionStorage.getItem('students')) sessionStorage.setItem('students',JSON.stringify(students))
    if(!sessionStorage.getItem('teachers')) sessionStorage.setItem('teachers',JSON.stringify(teachers))
    if(!sessionStorage.getItem('schools'))  sessionStorage.setItem('schools', JSON.stringify({
      username: 'citigroup',
      schoolName: 'City Model Group of Schools',
      schoolID: '8978CT'
    }))
  }

}
