import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent} from './education/education.component'
import {ExperienceComponent} from './experience/experience.component'

const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'education', component:EducationComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'hobbies', redirectTo:'/'},
  {path:'skills', redirectTo:'/'},
  {path:'*', redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
