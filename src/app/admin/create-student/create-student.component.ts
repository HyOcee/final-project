import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { students } from 'src/app/data/students';

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

  public newStudent!: FormGroup

  public listSubjects: string[] = []
  
  registerStudent(event: any){
    this.listSubjects = []
    event.preventDefault()
    let checkboxes = document.querySelectorAll(`input[type='checkbox']`) as unknown as Iterable<any>
    for(let check of checkboxes){
        if(check.checked) this.listSubjects.push(check.value)
        check.checked = false
      }
      let newStudentObject: any = {}
      newStudentObject.username = this.newStudent.value.username
      newStudentObject.name = this.newStudent.value.name
      newStudentObject.subjectsOfferred = []
      for(let subject of this.listSubjects){
        newStudentObject.subjectsOfferred.push({subject: subject, testScore: 0, examScore: 0})
      }
    console.log(newStudentObject)
    let existingStudents = JSON.parse(sessionStorage.getItem('students')!)
    existingStudents[this.newStudent.value.class].push(newStudentObject)
    sessionStorage.setItem('students',JSON.stringify(existingStudents))
    this.newStudent.reset()
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    if(!sessionStorage.getItem('students')){
      sessionStorage.setItem('students',JSON.stringify(students))
    }

    this.newStudent = this.fb.group({
      'name': new FormControl(),
      'class': new FormControl(),
      'username': new FormControl()
    })
  }

}
