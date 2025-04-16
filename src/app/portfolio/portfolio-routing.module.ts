import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { AcademicProjectsComponent } from './academic-projects/academic-projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'academic-projects', component: AcademicProjectsComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'books/**', redirectTo: 'books/basaa-ir/index.html' }, // Redirect to the correct path
  // { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
