import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { selectCategoriesArr } from '@app/redux/selectors/categories.selector';
import { IAppState } from '@app/redux/state/app.state';
import { ICategoryResponse } from '@app/shared/models/icategory-response';
import { props, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ServerShopService} from '@core/services/server-shop.service';
import { IGoods } from '@app/shared/models/IGoods';
import { selectUserCart} from '@app/redux/selectors/user.selector';
import {IOrdersDetails, IOrder,IOrdersItems} from '@shared/models/IUserInfo';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {
  public cartArr$: Observable<string[]>  = this.store.pipe(select(selectUserCart));
  public cartDataArr: IGoods[] =[];
  public orderNumber = 0;
  public orderCostArr: number[] = [];
  public details:IOrdersDetails ={  name: '', address: '', phone: '', timeToDeliver: '', comment: ''};
  public detailsForm:FormGroup;
  public orderItemsArr:IOrdersItems[] =[];
  constructor(private store: Store<IAppState>, private serverShopService:ServerShopService, private fb:FormBuilder) {
      this.cartArr$.subscribe(response => this.serverShopService.getGoodsByIdMany(response).subscribe(
       data=> {this.cartDataArr = data} ));

      this.detailsForm = this.fb.group({
        name: [this.details.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]],
        address: [this.details.address,[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ]],
        phone:[this.details.phone,[Validators.pattern(/^\+[0-9]+$/)]],
        timeToDeliver: [this.details.timeToDeliver,Validators.required],
        comment: [this.details.comment,Validators.maxLength(250)],
      })
   }

   calculateItem(number:number, price: number, i:number) {
    this.orderCostArr[i] = number * price;
   }

   calculateOrder( amount: number, id:string, i:number) {
     if(amount){
      this.orderItemsArr[i] = {id, amount};
     }

   }

   getOrderCost(){
     return this.orderCostArr.reduce((arr,value)=>arr+=value,0)
   }

   postOrder(){
    if(this.detailsForm.valid){
      this.serverShopService.postOrder({
        items: this.orderItemsArr,
        details: this.details,
        id: uuidv4()
      }).subscribe();
      this.orderItemsArr.map((item)=>this.serverShopService.removeFromCart(item.id).subscribe())
    }
   }

}
