import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGoods } from '@shared/models/IGoods';
import { SERVER_PATH_GET_CATEGORIES } from '@shared/constansts';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetDisplayGoods, SetDisplayCategory} from '@app/redux/actions/displayData.action';
import {IRenderrProps} from '@shared/models/IRenderProps';
import { ISubCategory} from '@shared/models/isubcategory';
import {ICategoryResponse} from '@shared/models/icategory-response';
import { selectCategoriesArr } from '@app/redux/selectors/categories.selector';
import { IAppState } from '@redux/state/app.state';

@Injectable()
export class RenderService {
  private CategoriesArr: ICategoryResponse[] =[];

  constructor(private store: Store<IAppState>) {
    this.store.select(selectCategoriesArr).subscribe((data) => {
      this.CategoriesArr = data;
  });

  }


  renerCategory(renderProps:IRenderrProps):ICategoryResponse {
    console.log('renderService');
    this.store.dispatch(new SetDisplayCategory(renderProps.category));
    const result = this.CategoriesArr[+renderProps.categoryIndex];
    return result;
  }

  // renderSubcategory(category: string, subcategory: string):Observable<IGoods[]> {

  // }
}
