import { RouterReducerState } from '@ngrx/router-store';
import { initialCategoriesState, ICategoriesState } from '@redux/state/categoryes.state';
import { initialDisplayDataState, IDisplayDataState } from '@redux/state/displayData.state';
import { initialUserState, IUserState } from './user.state copy';

export interface IAppState {
  router?: RouterReducerState;
  categories: ICategoriesState;
  displayData: IDisplayDataState;
  user: IUserState
}

export const initialAppState: IAppState = {
  categories: initialCategoriesState,
  displayData: initialDisplayDataState,
  user: initialUserState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
