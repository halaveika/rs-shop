import { Component } from '@angular/core';
import { IAppState } from '@app/redux/state/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ServerShopService} from '@core/services/server-shop.service';
import { IGoods } from '@app/shared/models/IGoods';
import { selectUserFavorites } from '@app/redux/selectors/user.selector';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent {
  public favoriteArr$: Observable<string[]>  = this.store.pipe(select(selectUserFavorites));
  public favoriteDataArr: IGoods[] =[];
  constructor(private store: Store<IAppState>, private serverShopService:ServerShopService) {

      this.favoriteArr$.subscribe(response => this.serverShopService.getGoodsByIdMany(response).subscribe(
       data=> {this.favoriteDataArr = data} ));

   }


}
