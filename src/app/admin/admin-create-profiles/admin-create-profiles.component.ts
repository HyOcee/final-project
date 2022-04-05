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
      name: new FormControl(),
      username: new FormControl()
  })

  private classesSelected: string[] = [] 

  registerTeachers(event: any): void {
    this.classesSelected = []
    event.preventDefault()
    let checkboxes = document.querySelectorAll(`input[type='checkbox']`) as unknown as Iterable<any>
    for(let check of checkboxes){
        if(check.checked) this.classesSelected.push(check.value)
        check.checked = false
      }
      this.registerTeacherForm.value.subjects = this.classesSelected

    let allTeachers = JSON.parse(sessionStorage.getItem('teachers')!)
    allTeachers.push(this.registerTeacherForm.value)
    sessionStorage.setItem('teachers',JSON.stringify(allTeachers))
    this.registerTeacherForm.reset()
  }

  toggleNav():void {
    let nav = document.querySelector('.aside-hide') as unknown as any
    nav?.classList.toggle('aside-show')
  }

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
  }

}
