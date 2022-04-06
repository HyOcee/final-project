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
    schoolName: new FormControl(),
    username: new FormControl(),
    schoolID: new FormControl()
  })

  registerSchool(event: any){
    event.preventDefault()
    if (!this.RegistrationData.value.username) this.RegistrationData.value.username = 'rochester'
    sessionStorage.setItem('schools',JSON.stringify(this.RegistrationData.value))
    console.log(this.RegistrationData.value)

    let payment = document.querySelector('.payment') as unknown as any
    payment.style.display = 'block'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
