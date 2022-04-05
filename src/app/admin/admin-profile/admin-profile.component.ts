import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css',
  '../../../assets/styles/dashboard.css',
  '../../../assets/styles/dashboard_inner_styles.css']
})
export class AdminProfileComponent implements OnInit {
  public school: any

  constructor() { }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    this.school = sessionStorage.getItem('schools')
  }

}
