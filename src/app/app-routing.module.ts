import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

const routes: Routes = [
  {
    path:'',
    component: MenuLateralComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
