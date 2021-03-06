import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

const routes: Routes = [
  { path: 'goods/:id', component: DetailPageComponent },
  { path: ':id', component: CategoriesPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule { }
