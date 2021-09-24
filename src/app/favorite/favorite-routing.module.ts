import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from '@favorite/pages/favorite-page/favorite-page.component';

const routes: Routes = [
  { path: ':id', component: FavoritePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteRoutingModule { }
