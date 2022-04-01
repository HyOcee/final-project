import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { subjectsOfferred } from 'src/app/data/subjects-and-classes';
import { classes } from 'src/app/data/subjects-and-classes';

@Component({
  selector: 'app-admin-create-profiles',
  templateUrl: './admin-create-profiles.component.html',
  styleUrls: ['./admin-create-profiles.component.css',
        '../../../assets/styles/dashboard.css',
        '../../../assets/styles/dashboard_inner_styles.css']
})
export class AdminCreateProfilesComponent implements OnInit {
  public allSubjects: string[] = subjectsOfferred
  public classes: string[] = classes

  registerTeacherForm = new FormGroup({
    teacher1 : new FormGroup({
      teacherName: new FormControl(),
      subjecstTaught: new FormControl()
    }),
  })

  addNew(event: any, tBody: any):void {
    event.preventDefault()
    let tr = this.renderer.createElement('tr')
    tr.innerHTML = `
        <td>1</td>
        <td><input type="text" formControlName="teacherName" placeholder="e.g Ogbonna Divine"></td>
        <td><input type="text" placeholder="divine@sbsc.com"></td>
        <td><input type="text" placeholder="0800 000 0000"></td>
        <td>
            <select name="subjects" id="">
                <option *ngFor="let subject of allSubjects">{{subject}}</option>
            </select>
        </td>
        <td>
            <select name="class" id="">
                <option *ngFor="let class of classes">{{class}}</option>
            </select>
        </td>
        <td><input type="text" placeholder="Ikorodu"></td>
    `
    this.renderer.appendChild(tBody,tr) 
  }

  registerTeachers(event: any): void {
    event.preventDefault()
    console.log(this.registerTeacherForm.value)
  }

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
  }

}
