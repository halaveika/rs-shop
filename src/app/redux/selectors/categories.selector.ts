import { createSelector } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import { ICategoriesState } from '@redux/state/categoryes.state';
import { ICategoryResponse } from '@shared/models/icategory-response';
import {ISubCategory} from '@shared/models/isubcategory';
import {selectRouteParams, selectCurrentRoute} from '@redux/selectors/router.selectors';
import {CATEGORY, SUBCATEGORY} from '@shared/constansts'
import {searchCategorySubcategoryIndex} from '@shared/helper'

const selectCategories = (state: IAppState) => state.categories;

export const selectCategoriesArr = createSelector(
  selectCategories ,
  (state: ICategoriesState ) => state.categories,
);

export const selectSubCategoriesArr = createSelector(
  selectCategoriesArr ,
  (state: ICategoryResponse[] ) => state.reduce<ISubCategory[]>((subArray, category) => {return subArray.concat(category.subCategories);}, [])
);

export const selectCategoryData = () => createSelector(
  selectRouteParams,
  selectCurrentRoute,
  selectCategoriesArr,
  ({id}, route, categories) => {;
    console.dir(route);
    if(id && route.routeConfig.path.slice(0,5) ==='goods') {return {category: '', categoryIndex: '', subcategory: '', subcategoryIndex: '', route: 'goods/' + id}};
    if(!id) {return {category: '', categoryIndex: '', subcategory: '', subcategoryIndex: '', route: route.routeConfig.path}};
    console.log('selectCategoryData', id);
    return searchCategorySubcategoryIndex(categories, id);
  });
