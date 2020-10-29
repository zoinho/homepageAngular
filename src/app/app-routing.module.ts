import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent} from './education/education.component'
import {ExperienceComponent} from './experience/experience.component'
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'education', component:EducationComponent, data: {state: 'education'}},
  {path:'experience', component: ExperienceComponent, data: {state: 'experience'}},
  {path:'hobbies', component:HobbiesComponent, data: {state: 'hobbies'}},
  {path:'skills', component:SkillsComponent, data: {state: 'skills'}},
  {path:'contact', component:ContactComponent, data: {state: 'contact'}},
  {path:'*', redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
