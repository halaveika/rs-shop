import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { ContentRoutingModule } from  '@content/content-routing.module';
import {ContentGuard} from '@content/content-guard';
import { GoodsCardComponent } from './components/goods-card/goods-card.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';



@NgModule({
  declarations: [
    CategoriesPageComponent,
    GoodsCardComponent,
    DetailPageComponent
  ],
  imports: [
    SharedModule,
    ContentRoutingModule
  ],
  providers:[ContentGuard]
})
export class ContentModule { }
