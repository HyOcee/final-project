import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css',
      '../../assets/styles/dashboard.css',
      '../../assets/styles/dashboard_inner_styles.css']
})
export class StudentComponent implements OnInit {

  public studentName: any

  constructor(private route: ActivatedRoute) { }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentName = params['username']
    })
  }

}
