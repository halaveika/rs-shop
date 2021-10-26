import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderPageComponent } from './pages/list-order-page/list-order-page.component';

const routes: Routes = [
  { path: ':id', component: ListOrderPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListorderRoutingModule { }
