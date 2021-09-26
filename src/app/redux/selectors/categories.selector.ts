import { createSelector } from '@ngrx/store';
import { IAppState } from '@redux/state/app.state';
import { ICategoriesState } from '@redux/state/categoryes.state';
import { ICategoryResponse } from '@shared/models/icategory-response';
import {ISubCategory} from '@shared/models/isubcategory';
import {selectRouteParams, selectCurrentRoute} from '@redux/selectors/router.selectors';
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
    if(id && route.routeConfig.path.includes('goods')) {return {category: '', categoryIndex: '', subcategory: '', subcategoryIndex: '', route: 'goods/' + id}};
    if(id && route.routeConfig.path.includes('order')) {return {category: '', categoryIndex: '', subcategory: '', subcategoryIndex: '', route: 'order/' + id}};
    if(id && route.routeConfig.path.includes('listorder')) {return {category: '', categoryIndex: '', subcategory: '', subcategoryIndex: '', route: 'listorder/' + id}};
    if(id && route.routeConfig.path.includes('favorite')) {return {category: '', categoryIndex: '', subcategory: '', subcategoryIndex: '', route: 'favorite/' + id}};
    if(!id) {return {category: '', categoryIndex: '', subcategory: '', subcategoryIndex: '', route: route.routeConfig.path}};
    return searchCategorySubcategoryIndex(categories, id);
  });
