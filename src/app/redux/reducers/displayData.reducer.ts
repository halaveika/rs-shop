import { DisplayDataActions, EDisplayDataActions } from '@redux/actions/displayData.action';
import { initialDisplayDataState, IDisplayDataState } from '@redux/state/displayData.state';

export const displayDataReducer = (
  state = initialDisplayDataState,
  action: DisplayDataActions,
): IDisplayDataState => {
  switch (action.type) {
    case EDisplayDataActions.SetDisplayCategory: {
      return {
        ...state,
        category: action.payload,
      };
    }
    case EDisplayDataActions.SetDisplayGoods: {
      return {
        ...state,
        category: action.payload.category,
        subcategory: action.payload.subcategory,
        goods: action.payload.goods,
      };
    }
    case EDisplayDataActions.CleanDisplay: {
      return {
        ...state,
        category: '',
        subcategory: '',
        goods: [],
      };
    }
    default:
      return state;
  }
};
