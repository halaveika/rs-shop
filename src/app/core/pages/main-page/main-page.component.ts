import { Component, OnInit } from '@angular/core';
import { selectCategoriesArr } from '@app/redux/selectors/categories.selector';
import { IAppState } from '@app/redux/state/app.state';
import { ICategoryResponse } from '@app/shared/models/icategory-response';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ServerShopService} from '@core/services/server-shop.service';
import { IGoods } from '@app/shared/models/IGoods';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public categoriesArr$: Observable<ICategoryResponse[]>  = this.store.pipe(select(selectCategoriesArr));
  public ratingArr: IGoods[] = [];
  public bottomCarouselArr: IGoods[][] = [];
  constructor(private store: Store<IAppState>, private serverShopService: ServerShopService) {
    this.categoriesArr$.subscribe(response=> this.serverShopService.getPopular(response).subscribe(goods=>{
      this.ratingArr = goods;
      goods.reduce((accum:IGoods[],value:IGoods,index)=>{
        if (!((index + 1) % 7)){ this.bottomCarouselArr.push(accum); return accum = [];} return accum=accum.concat(value)},[])
    }))
  }

}
