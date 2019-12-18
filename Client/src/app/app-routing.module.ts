import { AboutUsComponent } from './+user/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './+user/home/home.component';
import { ExaminationComponent } from './+user/examination/examination.component';
import { ResultsComponent } from './+user/results/results.component';
import { SyllabusComponent } from './+user/syllabus/syllabus.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'examination', component: ExaminationComponent },
  { path: 'university', loadChildren: () => import('./+user/+university/university.module').then(m => m.UniversityModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
