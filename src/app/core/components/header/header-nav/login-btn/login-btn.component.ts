import { Component } from '@angular/core';
import {ServerShopService} from '@core/services/server-shop.service';
import {Router} from '@angular/router';
import { TOKEN } from '@app/shared/constansts';
import { IAppState } from '@app/redux/state/app.state';
import {select, Store } from '@ngrx/store';
import {Observable } from 'rxjs';
import { selectUserOrders, selectUserCart, selectUserFavorites} from '@app/redux/selectors/user.selector';
import {IOrder} from '@shared/models/IUserInfo';


@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})
export class LoginBtnComponent{
  public ordersArr$: Observable<IOrder[]>  = this.store.pipe(select(selectUserOrders));
  public cartArr$: Observable<string[]>  = this.store.pipe(select(selectUserCart));
  public favoritesArr$: Observable<string[]>  = this.store.pipe(select(selectUserFavorites));

  public firstName = '';

  public lastName = '';


  public loginValue = '';

  public passwordValue = '';

  public isRegister = false;


  constructor(private store: Store<IAppState>, private serverShopService:ServerShopService,private router: Router ) {
    this.isRegister = false;

   }

  login() {
    if (this.loginValue.trim() && this.passwordValue.trim()) {
      this.serverShopService.signin(this.loginValue, this.passwordValue).subscribe(
        token=> {if(token) this.serverShopService.getUserInfo().subscribe();}
      )
    }
  }

  linkToFavorite(){
    if (localStorage.getItem(TOKEN)) {
      this.router.navigate(['favorite',localStorage.getItem(TOKEN)])}
  }

  linkToCart(){
    if (localStorage.getItem(TOKEN)) {
      this.router.navigate(['order',localStorage.getItem(TOKEN)])}
  }

  linkToListOrder(){
    if (localStorage.getItem(TOKEN)) {
      this.router.navigate(['listorder',localStorage.getItem(TOKEN)])}
  }

  registrationShow(){
    this.isRegister = !this.isRegister;
  }

  registr() {
    if (this.loginValue.trim() && this.passwordValue.trim() && this.firstName.trim() && this.lastName.trim()) {
      const user = {
        firstName: this.firstName.trim(),
        lastName: this.lastName.trim(),
        login: this.loginValue.trim(),
        password: this.passwordValue.trim() }
      this.serverShopService.registration(user).subscribe(
        token=> {if(token) this.serverShopService.getUserInfo().subscribe();}
      )

  }

  }
}
