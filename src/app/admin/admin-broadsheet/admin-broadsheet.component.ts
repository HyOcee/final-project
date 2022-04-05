import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-broadsheet',
  templateUrl: './admin-broadsheet.component.html',
  styleUrls: ['./admin-broadsheet.component.css','../../../assets/styles/dashboard.css']
})
export class AdminBroadsheetComponent implements OnInit {

  constructor() { }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
  }

}
