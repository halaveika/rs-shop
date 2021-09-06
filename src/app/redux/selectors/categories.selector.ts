import { createSelector } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import { ICategoriesState } from '@redux/state/categoryes.state';
import { ICategoryResponse } from '@shared/models/icategory-response';
import {ISubCategory} from '@shared/models/isubcategory';

const selectCategories = (state: IAppState) => state.categories;

export const selectCategoriesArr = createSelector(
  selectCategories ,
  (state: ICategoriesState ) => state.categories,
);

export const selectSubCategoriesArr = createSelector(
  selectCategoriesArr ,
  (state: ICategoryResponse[] ) => state.reduce<ISubCategory[]>((subArray, category) => {return subArray.concat(category.subCategories);}, [])
);

export const checkCategory = (id: string) => createSelector(
  selectCategoriesArr,
  selectSubCategoriesArr ,
  (categories, subCategories ) => {
    const a = categories.findIndex(category => category.id === id);
    const b = subCategories.findIndex(subcategory => subcategory.id === id);
    console.log('' + a + ', '+ b);
    if (a === -1 && b === -1) { return false};
    return true;
  });
