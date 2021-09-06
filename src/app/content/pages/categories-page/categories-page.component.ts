import { Component, OnInit } from '@angular/core';
import { checkCategory } from '@app/redux/selectors/categories.selector';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public categoryData$: Observable<any>;
  constructor(private store: Store<IAppState>, route: ActivatedRoute, router: Router) {
    const id: string = route.snapshot.params.id;
    this.categoryData$ = this.store.pipe(select(checkCategory(id)));
    this.categoryData$.subscribe(data => {if (!data) {router.navigate(['404'])}})
   }

  ngOnInit(): void {
    console.log('init');
  }

}
