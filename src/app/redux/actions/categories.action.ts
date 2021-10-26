import { Action } from '@ngrx/store';
import { ICategoryResponse } from '@shared/models/icategory-response';

export enum ECategoriesActions {
  GetCategories = '[Categories] Get Categories'
}

export class GetCategories implements Action {
  public readonly type = ECategoriesActions.GetCategories;

  constructor(public payload: ICategoryResponse[]) {}
}


export type CategoriesActions = GetCategories;
