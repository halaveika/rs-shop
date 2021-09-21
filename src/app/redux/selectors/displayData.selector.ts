// import { createSelector, select } from '@ngrx/store';
// import { IAppState } from '@redux/state/app.state';
// import {selectRouteParams} from '@redux/selectors/router.selectors';
// import {selectCategoriesArr, selectSubCategoriesArr} from '@redux/selectors/categories.selector'

// const selectDisplayData = (state: IAppState) => state.displayData;

// export const selectDisplayCategory = createSelector(
//   selectRouteParams,
//   selectCategoriesArr,
//   selectSubCategoriesArr ,
//   selectDisplayData,
//   ({id}, categories, subCategories, state) => {
//     const a = categories.findIndex(category => category.id === id);
//     const b = subCategories.findIndex(subcategory => subcategory.id === id);
//     console.log('' + a + ', '+ b);
//     if (a === -1 && b === -1) { return {}};
//     return (a !== -1) ? categories[a] : subCategories[b];
//   });

