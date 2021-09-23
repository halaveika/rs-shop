import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICategoryResponse } from '@shared/models/icategory-response';
import { IGoods } from '@shared/models/IGoods';
import { SERVER_PATH_GET_CATEGORIES, SERVER_PATH, CATEGORY, SUBCATEGORY } from '@shared/constansts';
import { Observable, throwError, from} from 'rxjs';
import { catchError, tap, map, mergeMap,scan,concatMap, reduce} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GetCategories } from '@app/redux/actions/categories.action';
import { SetDisplayGoods} from '@app/redux/actions/displayData.action';
import { IGoodsParam } from '@app/shared/models/IGoodsParam';

@Injectable()
export class ServerShopService {

  constructor(private http: HttpClient, private store: Store) {}


  getCategories():Observable<ICategoryResponse[]> {
    const params = new HttpParams()
    return this.http.get<ICategoryResponse[]>(SERVER_PATH_GET_CATEGORIES)
      .pipe(
        tap((response) => this.store.dispatch(new GetCategories(response))),
        catchError((error) => {
          throwError(error);
          return [];
        }),
      );
  }


  getGoods(category: string, subcategory: string,goodsHttpParams:IGoodsParam):Observable<IGoods[]> {
    const params = new HttpParams()
      .set('start', goodsHttpParams.start)
      .set('count', goodsHttpParams.count)
      .set('sortBy', goodsHttpParams.sortBy)
      .set('reverse', goodsHttpParams.reverse);
    return this.http.get<IGoods[]>(`${SERVER_PATH}goods/category/${category}/${subcategory}`,{params})
      .pipe(
        tap((goods) => this.store.dispatch(new SetDisplayGoods({category, subcategory, goods}))),
        catchError((error) => {
          throwError(error);
          return [];
        }),
      );
  }

  getGoodsById(id:string):Observable<IGoods> {

  console.log(id);
  return this.http.get<IGoods>(`${SERVER_PATH}goods/item/${id}`)
    .pipe(
      catchError((error) => {
        throwError(error);
        return [];
      }),
    );
}


  getPopular(data:ICategoryResponse[]):Observable<IGoods[]>{
    const reqArr:{category:string,subcategory:string}[] = [];
    const result:IGoods[] = [];
    const params = new HttpParams()
      .set('start', 0)
      .set('count', 1)
      .set('sortBy', 'rating')
      .set('reverse', true);
    data.forEach(category=>category.subCategories.forEach(subcategory=>reqArr.push({category: category.id,subcategory:subcategory.id})));
    return (from(reqArr).pipe(
      mergeMap(req =>
      this.http.get<IGoods[]>(`${SERVER_PATH}goods/category/${req.category}/${req.subcategory}`,{params})),
      reduce((arr,value)=>arr.concat(value)),
      ));

  }





}
