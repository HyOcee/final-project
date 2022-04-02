import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormControlName, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { getTeacherInfo } from 'src/app/data/teachers';
import { Indexable, students } from 'src/app/data/students';

@Component({
  selector: 'app-upload-results',
  templateUrl: './upload-results.component.html',
  styleUrls: ['./upload-results.component.css',
          '../../../assets/styles/dashboard.css',
          '../../../assets/styles/dashboard_inner_styles.css']
})
export class UploadResultsComponent implements OnInit {
  public teacherInfo: any
  public students = students
  public myStudents: any
  public totalStudents!: number;
  public currentSubject: any = ''

  displayStudents(subjectRequested: any){
    this.currentSubject = subjectRequested
    this.myStudents = []
    let studentsFromSessionStorage = JSON.parse(sessionStorage.getItem('students')!)
    for (let klass in studentsFromSessionStorage){
      for(let student of studentsFromSessionStorage[klass]){
        for(let subject of student.subjectsOfferred){
          if(subject.subject.toLowerCase() === subjectRequested.toLowerCase()){
            this.myStudents.push(student)
            
          }
        }
      }
    }

  }

  uploadResults(event: any): void {
    event.preventDefault()
    let studentsFromSessionStorage = JSON.parse(sessionStorage.getItem('students')!)
    for (let klass in studentsFromSessionStorage){
      for(let student of studentsFromSessionStorage[klass]){
        for(let subject of student.subjectsOfferred){
          if(subject.subject.toLowerCase() === this.currentSubject.toLowerCase()){

            let uploadedTestScore = document.querySelector(`#${student.username}test`) as unknown as any
            let uploadedExamScore = document.querySelector(`#${student.username}exam`) as unknown as any

            uploadedExamScore = uploadedExamScore.value? Number(uploadedExamScore.value): 0
            uploadedTestScore = uploadedTestScore.value? Number(uploadedTestScore.value): 0
            subject.testScore = uploadedTestScore;
            subject.examScore = uploadedExamScore;
          }
        }
      }
    }
    console.log(studentsFromSessionStorage)
    sessionStorage.setItem('students', JSON.stringify(studentsFromSessionStorage))
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    let teacherName
    this.route.queryParams.subscribe(params => {
      teacherName = params['username']
      this.teacherInfo = getTeacherInfo(teacherName)
      })
  }

}
