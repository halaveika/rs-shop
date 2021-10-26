import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { categoriesReducer} from './categories.reducer';
import { displayDataReducer } from './displayData.reducer';
import { userReducer } from './user.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  categories: categoriesReducer,
  displayData: displayDataReducer,
  router: routerReducer,
  user: userReducer
};
