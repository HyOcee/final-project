import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { GetRouteParams } from './services/getRouteParams';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginFormComponent,
    SignUpFormComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    TeacherProfileComponent,
    UploadResultsComponent,
    ClassroomComponent,
    StudentResultComponent,
    StudentProfileComponent,
    AdminOverviewComponent,
    AdminProfileComponent,
    AdminCreateProfilesComponent,
    ReportCardComponent,
    CreateStudentComponent,
    ManageTeachersComponent,
    ManageStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GetRouteParams],
  bootstrap: [AppComponent]
})
export class AppModule { }
