import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrderPageComponent } from './pages/list-order-page/list-order-page.component';
import {ListorderRoutingModule} from './listorder-routing.module';



@NgModule({
  declarations: [
    ListOrderPageComponent
  ],
  imports: [
    CommonModule,
    ListorderRoutingModule
  ]
})
export class ListorderModule { }
