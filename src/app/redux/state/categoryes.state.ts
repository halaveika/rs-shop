import { ICategoryResponse } from '@shared/models/icategory-response';

export interface ICategoriesState {
  categories: ICategoryResponse [];
}

export const initialCategoriesState: ICategoriesState = {
  categories: [],
};
