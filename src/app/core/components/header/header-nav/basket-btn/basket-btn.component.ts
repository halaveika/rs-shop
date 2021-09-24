import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { TOKEN } from '@app/shared/constansts';

@Component({
  selector: 'app-basket-btn',
  templateUrl: './basket-btn.component.html',
  styleUrls: ['./basket-btn.component.scss']
})
export class BasketBtnComponent {

  constructor(private router: Router ) { }

  linkToCart(){
    if (localStorage.getItem(TOKEN)) {
      this.router.navigate(['order',localStorage.getItem(TOKEN)])}

  }
}
