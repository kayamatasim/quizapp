import { QuestionsComponent } from './questions/questions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/component/signin/signin.component';
import { RulesComponent } from './questions/components/rules/rules.component';
import { LoginComponent } from './auth/component/login/login.component';



const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'home',component:RulesComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
