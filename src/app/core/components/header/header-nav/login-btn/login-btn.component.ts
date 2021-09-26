import { Component } from '@angular/core';
import {ServerShopService} from '@core/services/server-shop.service';
import {Router} from '@angular/router';
import { TOKEN } from '@app/shared/constansts';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})
export class LoginBtnComponent{
  public loginValue = '';

  public passwordValue = '';



  constructor(private serverShopService:ServerShopService,private router: Router ) { }

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

}
