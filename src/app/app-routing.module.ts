import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent} from './education/education.component'
import {ExperienceComponent} from './experience/experience.component'
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'education', component:EducationComponent, data: {state: 'education'}},
  {path:'experience', component: ExperienceComponent, data: {state: 'experience'}},
  {path:'hobbies', component:SkillsComponent, data: {state: 'hobbies'}},
  {path:'skills', component:SkillsComponent, data: {state: 'skills'}},
  {path:'*', redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
