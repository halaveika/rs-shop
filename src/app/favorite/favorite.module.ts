import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from '@favorite/pages/favorite-page/favorite-page.component';
import {FavoriteRoutingModule} from '@favorite/favorite-routing.module';
import { FavoriteItemComponent } from '@favorite/components/favorite-item/favorite-item.component';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    FavoritePageComponent,
    FavoriteItemComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    SharedModule
  ]
})
export class FavoriteModule { }
