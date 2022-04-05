import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css',
        '../../../assets/styles/dashboard.css']
})
export class AdminOverviewComponent implements OnInit {
  public school: any
  constructor() { }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    this.school = JSON.parse(sessionStorage.getItem('schools')!)
  }

}
