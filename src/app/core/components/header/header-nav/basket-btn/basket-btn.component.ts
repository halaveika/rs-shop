import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { TOKEN } from '@app/shared/constansts';
import { IAppState } from '@app/redux/state/app.state';
import {select, Store } from '@ngrx/store';
import {Observable } from 'rxjs';
import { selectUserCart} from '@app/redux/selectors/user.selector';


@Component({
  selector: 'app-basket-btn',
  templateUrl: './basket-btn.component.html',
  styleUrls: ['./basket-btn.component.scss']
})
export class BasketBtnComponent {
  public cartArr$: Observable<string[]>  = this.store.pipe(select(selectUserCart));

  constructor(private store: Store<IAppState>, private router: Router ) { }

  linkToCart(){
    if (localStorage.getItem(TOKEN)) {
      this.router.navigate(['order',localStorage.getItem(TOKEN)])}

  }
}
