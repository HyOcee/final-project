import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { students } from 'src/app/data/students';
import { Indexable } from 'src/app/data/students';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css','../../../assets/styles/styles_0.css','../../../assets/styles/styles_home.css']
})
export class LoginFormComponent implements OnInit {
  public students = students;

  LoginData = new FormGroup({
    loginAs: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  })

  Login(event: any){
    event.preventDefault()
    console.log(this.LoginData.value)

    if(this.LoginData.value.loginAs === 'student'){
      for (let klass in students) {
        (students as Indexable)[klass].forEach((student: any) => {
          console.log(student)
          if(student.username.toLowerCase() === this.LoginData.value.username){
            this.router.navigate([`/${this.LoginData.value.loginAs}`,this.LoginData.value.username])
          }
        })
      }
    } else if (this.LoginData.value.loginAs === 'teacher') {
      this.router.navigate([`/${this.LoginData.value.loginAs}`,this.LoginData.value.username])
    } else {
      this.router.navigate([`/${this.LoginData.value.loginAs}`,this.LoginData.value.username])
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
