import { UserActions, EUserActions } from '@redux/actions/user.action';
import { initialUserState, IUserState } from '@redux/state/user.state copy';


export const userReducer = (
  state = initialUserState,
  action: UserActions,
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUserInfo: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case EUserActions.AddToFavorite: {
      return {
        ...state,
        favorites: state.favorites.concat([action.payload]) ,
      };
    }
    case EUserActions.AddToCart: {
      return {
        ...state,
        cart: state.cart.concat([action.payload]) ,
      };
    }
    default:
      return state;
  }
};
