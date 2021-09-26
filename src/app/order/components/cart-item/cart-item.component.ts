import { Component, Input  } from '@angular/core';
import {Router} from '@angular/router';
import {ServerShopService} from '@core/services/server-shop.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
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

  removeFromCart(){
    this.serverShopService.removeFromCart(this.id).subscribe();
  }

}
