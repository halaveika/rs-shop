import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { ContentRoutingModule } from  '@content/content-routing.module';



@NgModule({
  declarations: [
    CategoriesPageComponent
  ],
  imports: [
    SharedModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
