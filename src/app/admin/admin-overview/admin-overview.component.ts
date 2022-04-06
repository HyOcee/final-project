import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css',
        '../../../assets/styles/dashboard.css']
})
export class AdminOverviewComponent implements OnInit {
  public school: any
  public allStudents: any = []
  public total: number = 0
   data: number[] = []

  constructor() { 
    Chart.register(...registerables);
  }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  ngOnInit(): void {
    this.school = JSON.parse(sessionStorage.getItem('schools')!)

    let studentsFromSessionStorage = JSON.parse(sessionStorage.getItem('students')!)
    for (let klass in studentsFromSessionStorage){
      this.data.push(studentsFromSessionStorage[klass].length)
      for(let student of studentsFromSessionStorage[klass]){
        this.allStudents.push(student)
        this.total++;
      }
    }

    const t_ctx = document.getElementById('myChart')! as unknown as any
    const ctx = t_ctx.getContext('2d') 
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['JS1', 'JS2', 'JS3', 'SS1', 'SS2', 'SS3'],
            datasets: [{
                label: 'Number of Students',
                data: this.data,
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
