import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICategoryResponse } from '@shared/models/icategory-response';
import { IGoods } from '@shared/models/IGoods';
import { SERVER_PATH_GET_CATEGORIES, SERVER_PATH, TOKEN } from '@shared/constansts';
import { Observable, throwError, from} from 'rxjs';
import { catchError, tap, map, mergeMap,scan,concatMap, reduce, switchMap} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GetCategories } from '@app/redux/actions/categories.action';
import { SetDisplayGoods} from '@app/redux/actions/displayData.action';
import { IGoodsParam } from '@app/shared/models/IGoodsParam';
import { IUserState } from '@app/redux/state/user.state copy';
import { AddToCart, AddToFavorite, GetUserInfo } from '@app/redux/actions/user.action';
import {IOrder, IOrdersItems} from '@shared/models/IUserInfo';


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
  return this.http.get<IGoods>(`${SERVER_PATH}goods/item/${id}`)
    .pipe(
      catchError((error) => {
        throwError(error);
        return [];
      }),
    );
}

getGoodsByIdMany(ids:string[]):Observable<IGoods[]> {
  console.dir(ids);
  return from(ids).pipe(
    mergeMap(id => this.http.get<IGoods[]>(`${SERVER_PATH}goods/item/${id}`)),
    reduce((acc:IGoods[], curr) => acc.concat(curr), [])
    )
}


  getPopular(data:ICategoryResponse[]):Observable<IGoods[]>{
    const reqArr:{category:string,subcategory:string}[] = [];
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

  signin(login:string, password: string):Observable<{token:string}>{
    return this.http.post<{token:string}>(`${SERVER_PATH}users/login`,{login,password})
    .pipe(
      tap((token) => localStorage.setItem(TOKEN,token.token)),
      catchError((error) => {
        throwError(error);
        return [];
      }),
      );
  }

  getUserInfo():Observable<IUserState>{
    return this.http.get<IUserState>(`${SERVER_PATH}users/userInfo`)
    .pipe(
      tap((userInfo) => this.store.dispatch(new GetUserInfo(userInfo))),
      catchError((error) => {
        throwError(error);
        return [];
      }),
      );
  }

  addToFavorites(id:string):Observable<IUserState>{
    return this.http.post(`${SERVER_PATH}users/favorites`,{id})
    .pipe(
      mergeMap((responses):Observable<IUserState> => this.getUserInfo()),
      catchError((error) => {
        throwError(error);
        return [];
      }),
      );
  }

  removeFromFavorites(id:string):Observable<IUserState>{
    const params = new HttpParams()
      .set('id', id);
    return this.http.delete(`${SERVER_PATH}users/favorites`, {params})
    .pipe(
      mergeMap((responses):Observable<IUserState> => this.getUserInfo()),
      catchError((error) => {
        throwError(error);
        return [];
      }),
      );
  }

  addToCart(id:string):Observable<IUserState>{
    console.dir(id);
    return this.http.post(`${SERVER_PATH}users/cart`,{id})
    .pipe(
      mergeMap((responses):Observable<IUserState> => this.getUserInfo()),
      catchError((error) => {
        throwError(error);
        return [];
      }),
      );
  }

  removeFromCart(id:string):Observable<IUserState>{
    const params = new HttpParams()
      .set('id', id);
    return this.http.delete(`${SERVER_PATH}users/cart`, {params})
    .pipe(
      mergeMap((responses):Observable<IUserState> => this.getUserInfo()),
      catchError((error) => {
        throwError(error);
        return [];
      }),
      );
  }


  postOrder(orders:IOrder):Observable<IUserState>{
    return this.http.post(`${SERVER_PATH}users/order`,orders)
    .pipe(
      mergeMap((responses):Observable<IUserState> => this.getUserInfo()),
      catchError((error) => {
        throwError(error);
        return [];
      }),
      );
  }


}
