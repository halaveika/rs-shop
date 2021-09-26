import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderRoutingModule } from './order-routing.module';
import {    SharedModule} from '@shared/shared.module';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';



@NgModule({
  declarations: [
    OrderPageComponent,
    CartItemComponent,
    NumberPickerComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
