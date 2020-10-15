import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent} from './education/education.component'

const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'education', component:EducationComponent},
  {path:'experience', redirectTo:'/'},
  {path:'hobbies', redirectTo:'/'},
  {path:'skills', redirectTo:'/'},
  {path:'*', redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
