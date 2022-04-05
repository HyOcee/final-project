import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Indexable } from 'src/app/data/students';
import { getAllTeachers } from 'src/app/data/teachers';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css','../../../assets/styles/styles_0.css','../../../assets/styles/styles_home.css']
})
export class LoginFormComponent implements OnInit {
  public students!: any

  LoginData = new FormGroup({
    loginAs: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  })

  Login(event: any){
    let students = this.students
    event.preventDefault()
    if(this.LoginData.value.loginAs === 'student'){
      for (let klass in students!) {
        (students as Indexable)[klass].forEach((student: any) => {
          if(student.username.toLowerCase() === this.LoginData.value.username.toLowerCase()){
            this.router.navigate(['/student'], {queryParams: {username: this.LoginData.value.username}})
          }
        })
      }
    } else if (this.LoginData.value.loginAs === 'teacher') {
      let allTeachers = getAllTeachers()
      allTeachers.forEach((teacher: any) => {
        if(teacher.username.toLowerCase() === this.LoginData.value.username.toLowerCase()){
          this.router.navigate(['/teacher'], {queryParams: {username: this.LoginData.value.username}})
        }
      });
    } else {
      this.router.navigate([`/${this.LoginData.value.loginAs}`,this.LoginData.value.username])
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.students = JSON.parse(sessionStorage.getItem('students')!)
  }

}
