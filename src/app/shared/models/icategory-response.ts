import { ISubCategory } from "./isubcategory";

export interface ICategoryResponse {
  id: string,
  name: string,
  subCategories: ISubCategory[]
}


