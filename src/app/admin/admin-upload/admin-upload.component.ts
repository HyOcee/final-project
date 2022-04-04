import { Component, OnInit } from '@angular/core';
import { subjectsOfferred } from 'src/app/data/subjects-and-classes';

@Component({
  selector: 'app-admin-upload',
  templateUrl: './admin-upload.component.html',
  styleUrls: ['./admin-upload.component.css',
  '../../../assets/styles/dashboard.css',
  '../../../assets/styles/dashboard_inner_styles.css']
})
export class AdminUploadComponent implements OnInit {

  public subjectsOfferred!: string[]
  public enrolledStudents!: any

  public currentSubject: any = ''

  displayStudents(subjectRequested: any){
    this.currentSubject = subjectRequested
    this.enrolledStudents = []
    let studentsFromSessionStorage = JSON.parse(sessionStorage.getItem('students')!)
    for (let klass in studentsFromSessionStorage){
      for(let student of studentsFromSessionStorage[klass]){
        for(let subject of student.subjectsOfferred){
          if(subject.subject.toLowerCase() === subjectRequested.toLowerCase()){
            this.enrolledStudents.push(student)
            
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

  constructor() { }

  ngOnInit(): void {
    this.subjectsOfferred = subjectsOfferred
  }

}
