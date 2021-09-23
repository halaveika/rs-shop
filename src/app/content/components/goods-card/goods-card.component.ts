import { Component, Input  } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss']
})
export class GoodsCardComponent{
  @Input() public name = '';

  @Input() public imageUrls:string[]= [];

  @Input() public vailableAmount = 0;

  @Input() public price = 0;

  @Input() public rating = 0;

  @Input() public description = '';

  @Input() public id = '';

  @Input() public isInCart = false;

  @Input() public isFavorite = false;


  constructor() { }


}