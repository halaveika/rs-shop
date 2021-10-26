import { Injectable } from '@angular/core';
import { IGoods } from '@shared/models/IGoods';
import {  Store } from '@ngrx/store';
import { SetDisplayCategory} from '@app/redux/actions/displayData.action';
import {IRenderrProps} from '@shared/models/IRenderProps';
import {ICategoryResponse} from '@shared/models/icategory-response';
import { selectCategoriesArr } from '@app/redux/selectors/categories.selector';
import { IAppState } from '@redux/state/app.state';
import {ServerShopService} from './server-shop.service'
import {selectDisplayCategory} from '@redux/selectors/displayData.selector';
import {IDisplayDataState} from '@redux/state/displayData.state';
import { IGoodsParam } from '@app/shared/models/IGoodsParam';

@Injectable()
export class RenderService {
  private CategoriesArr: ICategoryResponse[] =[];
  private Goods: IGoods[] = [];

  constructor(private store: Store<IAppState>, private serverShopService:ServerShopService) {
    this.store.select(selectCategoriesArr).subscribe((data) => {
      this.CategoriesArr = data;
      this.store.select(selectDisplayCategory).subscribe((data) =>
this.Goods = data.goods)});

}


  renderCategory(renderProps:IRenderrProps):ICategoryResponse {
    this.store.dispatch(new SetDisplayCategory(renderProps.category));
    const result = this.CategoriesArr.find(category => category.id === renderProps.category) as ICategoryResponse;
    return result;
  }

  renderSubcategory(renderProps:IRenderrProps,goodsHttpParams: IGoodsParam):IDisplayDataState {
    this.serverShopService.getGoods(renderProps.category,renderProps.subcategory,goodsHttpParams).subscribe();
    return {category: renderProps.category, subcategory: renderProps.subcategory , goods: this.Goods}
  }
}
