import { createSelector, select } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import {selectRouteParams} from '@redux/selectors/router.selectors';
import {selectCategoriesArr, selectSubCategoriesArr} from '@redux/selectors/categories.selector'

const selectDisplayData = (state: IAppState) => state.displayData;

export const selectDisplayCategory = createSelector(
  selectDisplayData,
  ( state) => {
    return state;
  });

