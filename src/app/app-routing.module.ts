import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './home/login-form/login-form.component';
import { SignUpFormComponent } from './home/sign-up-form/sign-up-form.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { UploadResultsComponent } from './teacher/upload-results/upload-results.component';
import { ClassroomComponent } from './teacher/classroom/classroom.component';
import { StudentResultComponent } from './student/student-result/student-result.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { AdminOverviewComponent } from './admin/admin-overview/admin-overview.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminCreateProfilesComponent } from './admin/admin-create-profiles/admin-create-profiles.component';
import { ReportCardComponent } from './student/report-card/report-card.component';
import { CreateStudentComponent } from './admin/create-student/create-student.component';
import { ManageTeachersComponent } from './admin/manage-teachers/manage-teachers.component';
import { ManageStudentsComponent } from './admin/manage-students/manage-students.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      {path: '', component: LoginFormComponent},
      {path: 'signup', component: SignUpFormComponent}
    ]
},
  {path: 'contact-us', component: ContactComponent},
  {path: 'admin/:id', component: AdminComponent,
      children: [
        {path: '', component: AdminOverviewComponent},
        {path: 'create-profile', component: AdminCreateProfilesComponent},
        {path: 'register-student', component: CreateStudentComponent},
        {path: 'teachers', component: ManageTeachersComponent},
        {path: 'students', component: ManageStudentsComponent},
        {path: 'profile', component: AdminProfileComponent}
      ]
  },
  {path: 'teacher', component: TeacherComponent,
      children: [
        {path: '', component: ClassroomComponent},
        {path: 'upload-results', component: UploadResultsComponent},
        {path: 'profile', component: TeacherProfileComponent}
      ]
  },
  {path: 'student', component: StudentComponent,
    children: [
      {path: '', component: StudentResultComponent},
      {path: 'profile', component: StudentProfileComponent},
      {path: 'report-card', component: ReportCardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
