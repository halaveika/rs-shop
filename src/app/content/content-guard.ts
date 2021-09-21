import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RenderService } from '@app/core/services/render.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import {IRenderrProps} from '@shared/models/IRenderProps';
import { selectCategoryData } from '@app/redux/selectors/categories.selector';

@Injectable()
export class ContentGuard implements CanActivate {
  private categoryData$:Observable<IRenderrProps> =this.store.pipe(select(selectCategoryData()));

  constructor(private store: Store<IAppState>, private renderService: RenderService , private router: Router) {}

  canActivate():Observable<boolean> | Promise<boolean> | boolean {
     this.categoryData$.subscribe(props => {
      if (!props.category && !props.subcategory) {
          this.router.navigate(['404']);
          return false;
      }
      return true
    })
  return true;
  }


}
