import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { students } from 'src/app/data/students';

@Component({
  selector: 'app-upload-results',
  templateUrl: './upload-results.component.html',
  styleUrls: ['./upload-results.component.css',
          '../../../assets/styles/dashboard.css',
          '../../../assets/styles/dashboard_inner_styles.css']
})
export class UploadResultsComponent implements OnInit {
  public students = students

  uploadResultsForm = new FormGroup({
    teacher1 : new FormGroup({
      teacherName: new FormControl(),
      subjecstTaught: new FormControl()
    }),
  })

  uploadResults(event: any): void {
    event.preventDefault()
    console.log(this.uploadResultsForm.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
