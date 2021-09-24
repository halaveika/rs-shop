import { IOrder } from '@shared/models/IUserInfo';

export interface IUserState {
  firstName: string,
  lastName: string,
  cart: string[],
  favorites: string[],
  orders: IOrder[]
}


export const initialUserState: IUserState= {
  firstName: '',
  lastName: '',
  cart: [],
  favorites: [],
  orders: []
};
