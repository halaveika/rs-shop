import { Action } from '@ngrx/store';
import { IUserState } from '@redux/state/user.state copy';

export enum EUserActions {
  GetUserInfo = '[Users] Get User InFO',
  AddToFavorite = '[Users] Add To Favorite',
  AddToCart = '[Users] Add To Cart'
}

export class GetUserInfo implements Action {
  public readonly type = EUserActions.GetUserInfo;

  constructor(public payload: IUserState) {}
}

export class AddToFavorite implements Action {
  public readonly type = EUserActions.AddToFavorite;

  constructor(public payload: string) {}
}

export class AddToCart implements Action {
  public readonly type = EUserActions.AddToCart;

  constructor(public payload: string) {}
}


export type UserActions = GetUserInfo | AddToFavorite | AddToCart;
