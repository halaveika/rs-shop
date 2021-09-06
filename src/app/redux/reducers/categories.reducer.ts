import { CategoriesActions, ECategoriesActions } from '@redux/actions/categories.action';
import { initialCategoriesState, ICategoriesState } from '@redux/state/categoryes.state';

export const categoriesReducer = (
  state = initialCategoriesState,
  action: CategoriesActions,
): ICategoriesState => {
  switch (action.type) {
    case ECategoriesActions.GetCategories: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
};
