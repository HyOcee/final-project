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

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentName = params['username']
    })
  }

}
