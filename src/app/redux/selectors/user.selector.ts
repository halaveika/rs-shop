import { createSelector, select } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';


const selectUser = (state: IAppState) => state.user;

export const selectUserCart = createSelector(
  selectUser,
  ( state) => state.cart);

  export const selectUserFavorites = createSelector(
    selectUser,
    ( state) => state.favorites);

  export const selectUserOrders = createSelector(
    selectUser,
    ( state) => state.orders);
