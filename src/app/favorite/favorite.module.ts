import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import {FavoriteRoutingModule} from '@favorite/favorite-routing.module';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';



@NgModule({
  declarations: [
    FavoritePageComponent,
    FavoriteItemComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule
  ]
})
export class FavoriteModule { }
