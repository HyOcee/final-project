import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables} from 'chart.js';
import { getTeacherInfo } from 'src/app/data/teachers';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css',
  '../../../assets/styles/dashboard.css',
  '../../../assets/styles/dashboard_inner_styles.css']
})
export class OverviewComponent implements OnInit {

  public teacherInfo: any

  public myStudents: any = []
  public totalStudents: any = 0
  public myChart: any

  constructor(private route: ActivatedRoute) { 
    Chart.register(...registerables);
  }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  displayStudents(subjectRequested: any){
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
      this.totalStudents = this.myStudents.length
      let labels: string[] = []
      let data: number[] = []
      for(let student of this.myStudents) {
        labels.push(student.name.slice(0,3))
        let subjectToGet;
        for(let subject of student.subjectsOfferred){
          if(subject.subject.toLowerCase() === subjectRequested.toLowerCase()){
            data.push(subject.testScore + subject.examScore)
          }
        }
      }
      this.createChart(labels,data)
  }

  createChart(labels: string[], data: number[]) {
    const t_ctx = document.getElementById('myChart')! as unknown as any
    const ctx = t_ctx.getContext('2d') 
    this.myChart.destroy()
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels,
          datasets: [{
              label: 'Overall Score',
              data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

  ngOnInit(): void {
    let teacherName
    this.route.queryParams.subscribe(params => {
      teacherName = params['username']
      this.teacherInfo = getTeacherInfo(teacherName)
      })

      
    const t_ctx = document.getElementById('myChart')! as unknown as any
    const ctx = t_ctx.getContext('2d') 
    this.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','brown'],
            datasets: [{
                label: 'Scores',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }

}
