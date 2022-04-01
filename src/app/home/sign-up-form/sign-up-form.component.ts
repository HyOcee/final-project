import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: [
      './sign-up-form.component.css',
      '../../../assets/styles/styles_0.css',
      '../../../assets/styles/styles_home.css'
    ]
})
export class SignUpFormComponent implements OnInit {

  RegistrationData = new FormGroup({
    nameOfSchool: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  })

  registerSchool(event: any){
    event.preventDefault()
    console.log(this.RegistrationData.value)
    this.router.navigate(['/admin',this.RegistrationData.value.username, ''])
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
