import { Component, OnDestroy } from '@angular/core';
import { selectCategoryData } from '@app/redux/selectors/categories.selector';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import { Observable, Subscription, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {ICategoryResponse} from '@shared/models/icategory-response';
import {CATEGORY, SUBCATEGORY} from '@shared/constansts'
import {IRenderrProps} from '@shared/models/IRenderProps';
import { RenderService } from '@app/core/services/render.service';
import { CleanDisplay } from '@app/redux/actions/displayData.action';
import { takeUntil } from 'rxjs/operators';
import {IDisplayDataState} from '@redux/state/displayData.state'
import { IGoodsParam } from '@app/shared/models/IGoodsParam';
import {selectDisplayCategory} from '@redux/selectors/displayData.selector';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})

export class CategoriesPageComponent implements OnDestroy{
  public categoryData$: Observable<IRenderrProps> =this.store.pipe(select(selectCategoryData()));
  public categorySub : Subscription;
  public pushDataForCategories:ICategoryResponse | null = null;
  public pushDataForSubcategories: Observable<IDisplayDataState | null> = this.store.pipe(select(selectDisplayCategory))
  public renderCategories: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public goodsHttpParams:  IGoodsParam = {
    start: 0,
    count: 10,
    sortBy: 'rating',
    reverse: false,
  };

  constructor(private store: Store<IAppState>, private router: Router, private renderService: RenderService ) {
    this.categorySub = this.categoryData$.pipe(takeUntil(this.destroy$)).subscribe(props => {
      if (!props.category && !props.subcategory) {
        this.destroy$.next(true);
        if (props.route && props.route! ==='main') {this.router.navigate(['main'])}
          else if(props.route! && props.route!.includes('goods')) {this.router.navigate(['category/goods',props.route!.slice(6)])}
            else if(props.route! && props.route!.includes('order')) {this.router.navigate(['order',props.route!.slice(6)])}
              else if(props.route! && props.route!.includes('listorder')) {this.router.navigate(['listorder',props.route!.slice(10)])}
                else if(props.route! && props.route!.includes('favorite')) {this.router.navigate(['favorite',props.route!.slice(9)])}

          return;
      } else if (props.category && !props.subcategory ) {
        this.renderCategories= true;
        this.pushDataForCategories = this.renderService.renderCategory(props)}
            else {this.renderCategories= false;
              this.setGoodsHttpParams();
               this.renderService.renderSubcategory(props,this.goodsHttpParams);
            }

  })

}
   getMoreGoods() {
    this.goodsHttpParams.count += 10;
    const sub = this.store.pipe(select(selectDisplayCategory)).subscribe((data)=>this.renderService.renderSubcategory(data,this.goodsHttpParams));
    sub.unsubscribe();
  }

  sortByRait() {
    this.goodsHttpParams.sortBy = 'rating';
    this.goodsHttpParams.reverse = !this.goodsHttpParams.reverse ;
    const sub = this.store.pipe(select(selectDisplayCategory)).subscribe((data)=>this.renderService.renderSubcategory(data,this.goodsHttpParams));
    sub.unsubscribe();
  }

  sortByPrice() {
    this.goodsHttpParams.sortBy = 'price';
    this.goodsHttpParams.reverse = !this.goodsHttpParams.reverse ;
    const sub = this.store.pipe(select(selectDisplayCategory)).subscribe((data)=>this.renderService.renderSubcategory(data,this.goodsHttpParams));
    sub.unsubscribe();

  }

  setGoodsHttpParams() {
    this.goodsHttpParams = {
      start: 0,
      count: 10,
      sortBy: 'rating',
      reverse: false,
    };
  }


  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
    this.store.dispatch(new CleanDisplay());
  }



}
