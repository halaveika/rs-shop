import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICategoryResponse } from '@shared/models/icategory-response';
import { SERVER_PATH_GET_CATEGORIES } from '@shared/constansts';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GetCategories } from '@app/redux/actions/categories.action';

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
}
