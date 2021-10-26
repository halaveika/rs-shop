import { Action } from '@ngrx/store';
import {IDisplayDataState} from '@redux/state/displayData.state'

export enum EDisplayDataActions {
  SetDisplayCategory = '[Display Data] Set Display Category',
  SetDisplayGoods = '[Display Data] Set Display Goods',
  CleanDisplay = '[Display Data] Clean Display'
}

export class SetDisplayCategory implements Action {
  public readonly type = EDisplayDataActions.SetDisplayCategory;

  constructor(public payload: string) {}
}

export class SetDisplayGoods implements Action {
  public readonly type = EDisplayDataActions.SetDisplayGoods;

  constructor(public payload: IDisplayDataState) {}
}

export class CleanDisplay implements Action {
  public readonly type = EDisplayDataActions.CleanDisplay;

  constructor() {
  }
}



export type DisplayDataActions = SetDisplayCategory | SetDisplayGoods | CleanDisplay;
