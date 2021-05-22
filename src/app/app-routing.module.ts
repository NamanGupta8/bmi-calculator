import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';

const routes: Routes = [
  {path:'', redirectTo:'/bmi', pathMatch:'full'},
  {path:'bmi', component: BmiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
