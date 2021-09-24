import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ServerShopService} from '@core/services/server-shop.service'

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit{
  public name = '';

  public imageUrls:string[]= [];

  public vailableAmount = 0;

  public price = 0;

  public rating = 0;

  public description = '';

  public id = '';

  public isInCart = false;

  public isFavorite = false;

  constructor(private serverShopService: ServerShopService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      return true;
    });
    this.serverShopService.getGoodsById(this.id).subscribe((item) => {
      this.name = item.name;
      this.imageUrls = item.imageUrls;
      this.vailableAmount = item.vailableAmount;
      this.price = item.price;
      this.rating = item.rating;
      this.description = item.description;
      this.isInCart = item.isInCart;
      this.isFavorite = item.isFavorite;
      return true;
    });
  }

  addToFavorites(){
    this.serverShopService.addToFavorites(this.id).subscribe();
  }

  addToCart(){
    this.serverShopService.addToCart(this.id).subscribe();
  }
}
