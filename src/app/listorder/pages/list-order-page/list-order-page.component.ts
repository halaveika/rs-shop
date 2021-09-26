import { Component } from '@angular/core';
import { IAppState } from '@app/redux/state/app.state';
import {select, Store } from '@ngrx/store';
import { concat, Observable } from 'rxjs';
import { selectUserCart, selectUserOrders} from '@app/redux/selectors/user.selector';
import {IOrdersDetails, IOrder,IOrdersItems} from '@shared/models/IUserInfo';
import {ServerShopService} from '@core/services/server-shop.service';
import {IGoods} from '@shared/models/IGoods';
import { catchError, tap, map, mergeMap,scan,concatMap, reduce, switchMap, first} from 'rxjs/operators';

@Component({
  selector: 'app-list-order-page',
  templateUrl: './list-order-page.component.html',
  styleUrls: ['./list-order-page.component.scss']
})
export class ListOrderPageComponent {
  public ordersArrId$: Observable<IOrder[]>  = this.store.pipe(select(selectUserOrders));
  public goodsArr$: IGoods[][]=[];
  public amountArr$: number[][]=[];
  constructor(private store: Store<IAppState>, private serverShopService:ServerShopService) {
    this.getGoodsInfo(this.ordersArrId$);
    this.getGoodsAmount(this.ordersArrId$);
  }

  getGoodsInfo(ordersItems:Observable<IOrder[]>){
    ordersItems.subscribe(orders=> orders.forEach(element=>{
      const arr:IGoods[]=[];
      const orderGoods = element.items.map((value)=> this.serverShopService.getGoodsById(value.id).subscribe(x=>arr.push(x)));
      this.goodsArr$.push(arr);
    }))
  }

  getGoodsAmount(ordersItems:Observable<IOrder[]>){
    ordersItems.subscribe(orders=> orders.forEach(element=>{
      const arr:number[]=[];
      const orderGoods = element.items.map((value)=> value.amount);
      this.amountArr$.push(orderGoods);
    }))
  }


  getOrderCost(index:number){
    return this.goodsArr$[index].reduce((sum,element,i)=> {return sum += element.price * this.amountArr$[index][i]},0)
  }

}
