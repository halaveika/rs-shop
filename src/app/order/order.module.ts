import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderRoutingModule } from './order-routing.module';



@NgModule({
  declarations: [
    OrderPageComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
