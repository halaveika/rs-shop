import { createSelector } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';

const selectDisplayData = (state: IAppState) => state.displayData;

export const selectDisplayCategory = createSelector(
  selectDisplayData,
  ( state) => {
    return state;
  });

