import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './components/allusers/allusers.component';
import { ToppersComponent } from './components/toppers/toppers.component';
import { UsersComponent } from './components/users/users.component';
import { WinnersComponent } from './components/winners/winners.component';

const routes: Routes = [
  {path:'**',component:AllusersComponent},
  {path:'all',component:AllusersComponent},
  {path:'topper',component:ToppersComponent},
  {path:'user',component:UsersComponent},
  {path:'winners',component:WinnersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
