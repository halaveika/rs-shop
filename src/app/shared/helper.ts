import { ICategoryResponse } from '@shared/models/icategory-response';

export function searchCategorySubcategoryIndex (categories:ICategoryResponse[], id: string) {
  const result = {category: '', categoryIndex: '' , subcategory: '', subcategoryIndex: ''};
  const a = categories.findIndex(category => category.id === id);
  if(a !== -1) {return  {category: categories[a].id, categoryIndex: `${a}`, subcategory: '', subcategoryIndex: ''}};
  categories.forEach((category,index) => {const b = category.subCategories.findIndex(subCategory =>
    subCategory.id === id); if (b !== -1 ) {
      result.subcategory = category.subCategories[b].id;
      result.subcategoryIndex = `${b}`;
      result.category = category.id;
      result.categoryIndex = `${index}`;
    }
  return true});
  console.dir(result);
  return result;
}
