import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { selectCategoriesArr } from '@app/redux/selectors/categories.selector';
import { IAppState } from '@app/redux/state/app.state';
import { ICategoryResponse } from '@app/shared/models/icategory-response';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  public categoriesArr$: Observable<ICategoryResponse[]>  = this.store.pipe(select(selectCategoriesArr));

  constructor(private router: Router,private store: Store<IAppState>) { }

  navigateHome () {
    this.router.navigate(['']);
  }
}
