import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { PromoListComponent } from './components/header/promo-list/promo-list.component';
import { HeaderInfoComponent } from './components/header/header-info/header-info.component';
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component';
import { LocationComponent } from './components/header/header-info/location/location.component';
import { HeaderContactComponent } from './components/header/header-info/header-contact/header-contact.component';
import { SearchComponent } from './components/header/header-nav/search/search.component';
import { LoginBtnComponent } from './components/header/header-nav/login-btn/login-btn.component';
import { BasketBtnComponent } from './components/header/header-nav/basket-btn/basket-btn.component';
import { FooterContactsComponent } from './components/footer/footer-contacts/footer-contacts.component';
import { FooterSocialComponent } from './components/footer/footer-social/footer-social.component';
import {ServerShopService} from './services/server-shop.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UndefinedPageComponent } from './pages/undefined-page/undefined-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {RenderService} from './services/render.service';
import {AuthInterceptor} from '@core/auth-interceptor';
import {UserService} from '@core/services/user.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PromoListComponent,
    HeaderInfoComponent,
    HeaderNavComponent,
    LocationComponent,
    HeaderContactComponent,
    SearchComponent,
    LoginBtnComponent,
    BasketBtnComponent,
    FooterContactsComponent,
    FooterSocialComponent,
    UndefinedPageComponent,
    MainPageComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UndefinedPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ServerShopService,
    RenderService,
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: (serverShopService : ServerShopService ) => () => serverShopService.getCategories(),
      deps: [ServerShopService ],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (userService: UserService) => () => userService.removeToken(),
      deps: [UserService],
      multi: true,
    },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
  ],
})
export class CoreModule { }

