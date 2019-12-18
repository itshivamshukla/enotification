import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNoticeboardComponent } from './admin-noticeboard/admin-noticeboard.component';
import { AdminResultComponent } from './admin-result/admin-result.component';
import { AdminExaminationComponent } from './admin-examination/admin-examination.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminStateComponent } from './admin-state/admin-state.component';
import { AdminUniversityComponent } from './admin-university/admin-university.component';
import { AdminSyllabusComponent } from './admin-syllabus/admin-syllabus.component';

@NgModule({
  declarations: [AdminHomeComponent,
    AdminNoticeboardComponent,
    AdminResultComponent,
    AdminExaminationComponent,
    AdminLoginComponent,
    AdminStateComponent,
    AdminUniversityComponent,
    AdminSyllabusComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
