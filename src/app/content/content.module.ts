import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { ContentRoutingModule } from  '@content/content-routing.module';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { SubcategoryItemComponent } from './components/subcategory-item/subcategory-item.component';
import {ContentGuard} from '@content/content-guard';



@NgModule({
  declarations: [
    CategoriesPageComponent,
    CategoryItemComponent,
    SubcategoryItemComponent
  ],
  imports: [
    SharedModule,
    ContentRoutingModule
  ],
  providers:[ContentGuard]
})
export class ContentModule { }
