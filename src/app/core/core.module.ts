import { NgModule } from '@angular/core';
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
    FooterSocialComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
})
export class CoreModule { }
