import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { classes, subjectsOfferred } from 'src/app/data/subjects-and-classes';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css',
    '../../../assets/styles/dashboard.css',
    '../../../assets/styles/dashboard_inner_styles.css']
})
export class CreateStudentComponent implements OnInit {
  public classes: string[] = classes
  public subjects: string[] = subjectsOfferred

  public newStudent = new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    username: new FormControl(),
    subjectsOfferred: new FormControl()
  })

  registerStudent(event: any){
    event.preventDefault()
    console.log(this.newStudent.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
