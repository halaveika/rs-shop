import { Component} from '@angular/core';
import { selectCategoriesArr } from '@app/redux/selectors/categories.selector';
import { IAppState } from '@app/redux/state/app.state';
import { ICategoryResponse } from '@app/shared/models/icategory-response';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent {
  public CategoriesArr$: Observable<ICategoryResponse[]>  = this.store.pipe(select(selectCategoriesArr));
  constructor(private store: Store<IAppState>) { }


}
