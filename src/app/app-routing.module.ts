import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './components/allusers/allusers.component';

const routes: Routes = [
  {path:'all',component:AllusersComponent},
  {path:'topper',component:AllusersComponent},
  {path:'user',component:AllusersComponent},
  {path:'winners',component:AllusersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
