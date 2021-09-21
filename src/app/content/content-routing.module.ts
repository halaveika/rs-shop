import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import {UndefinedPageComponent} from '@core/pages/undefined-page/undefined-page.component';
import {ContentGuard} from '@content/content-guard';
import {MainPageComponent} from '@core/pages/main-page/main-page.component';

const routes: Routes = [
  { path: ':id', component: CategoriesPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule { }
