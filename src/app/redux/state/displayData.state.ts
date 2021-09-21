import { IGoods } from '@shared/models/IGoods';

export interface IDisplayDataState {
  category: string;
  subcategory: string;
  goods: IGoods[];
}

export const initialDisplayDataState: IDisplayDataState  = {
  category: '',
  subcategory: '',
  goods: []
};
