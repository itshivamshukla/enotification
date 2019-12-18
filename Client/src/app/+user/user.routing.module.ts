import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExaminationComponent } from './examination/examination.component';
import { ResultsComponent } from './results/results.component';
import { SyllabusComponent } from './syllabus/syllabus.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'examination', component: ExaminationComponent },
  { path: 'university', loadChildren: () => import('./+university/university.module').then(m => m.UniversityModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
