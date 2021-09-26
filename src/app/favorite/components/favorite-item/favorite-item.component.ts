import { Component, Input  } from '@angular/core';
import {Router} from '@angular/router';
import {ServerShopService} from '@core/services/server-shop.service'


@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent {
  @Input() public name = '';

  @Input() public imageUrls:string[]= [];

  @Input() public availableAmount = 0;

  @Input() public price = 0;

  @Input() public rating = 0;

  @Input() public description = '';

  @Input() public id = '';

  @Input() public isInCart = false;

  @Input() public isFavorite = false;
  constructor(private serverShopService: ServerShopService) { }

  addToCart(){
    this.serverShopService.addToCart(this.id).subscribe();
    this.serverShopService.removeFromFavorites(this.id).subscribe()
  }

  removeFromFavorite(){
    this.serverShopService.removeFromFavorites(this.id).subscribe()
  }

}
