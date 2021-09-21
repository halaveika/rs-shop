import { Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import { selectCategoryData } from '@app/redux/selectors/categories.selector';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import { Observable, Subscription, Subject} from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router';
import { ISubCategory} from '@shared/models/isubcategory';
import {ICategoryResponse} from '@shared/models/icategory-response';
import {CATEGORY, SUBCATEGORY} from '@shared/constansts'
import {IRenderrProps} from '@shared/models/IRenderProps';
import { RenderService } from '@app/core/services/render.service';
import { CleanDisplay } from '@app/redux/actions/displayData.action';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})

export class CategoriesPageComponent {
  public categoryData$: Observable<IRenderrProps> =this.store.pipe(select(selectCategoryData()));
  public categorySub : Subscription;
  public pushDataForCategories:ICategoryResponse | null = null;
  public pushDataForSubcategories: ISubCategory | null = null;
  public renderCategories: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<IAppState>, private router: Router, private renderService: RenderService ) {
    if (!this.router.url.includes('category')) {
      console.log(this.router.url);
      this.destroy$.next(true)};

    this.categorySub = this.categoryData$.pipe(takeUntil(this.destroy$)).subscribe(props => {
      console.log('CategoriesPageComponent');
      if (!props.category && !props.subcategory) {
        console.log('CategoriesPageComponent if 404');
        console.dir(props);
        this.destroy$.next(true);
        if (props.route! ==='main') {this.router.navigate(['main'])}
        else {this.router.navigate(['../404']);}
        return;
      } else if (props.category && !props.subcategory ) {
        this.renderCategories= true;
        console.log('CategoriesPageComponent if category');
        this.pushDataForCategories = this.renderService.renerCategory(props)}
            else {this.renderCategories= false;}
            //   this.pushDataForSubcategories = data.data as  ISubCategory}
  })

}

  ngOnDestroy(): void {
    console.log('Destroy category-page');
    // this.categorySub.unsubscribe();


    this.destroy$.unsubscribe();
    this.store.dispatch(new CleanDisplay());
  }

}
