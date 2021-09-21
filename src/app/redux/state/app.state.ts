import { RouterReducerState } from '@ngrx/router-store';
import { initialCategoriesState, ICategoriesState } from '@redux/state/categoryes.state';
import { initialDisplayDataState, IDisplayDataState } from '@redux/state/displayData.state';

export interface IAppState {
  router?: RouterReducerState;
  categories: ICategoriesState;
  displayData: IDisplayDataState;
}

export const initialAppState: IAppState = {
  categories: initialCategoriesState,
  displayData: initialDisplayDataState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
