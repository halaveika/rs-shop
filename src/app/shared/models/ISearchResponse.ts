
export interface ISearchResponse {
  id: string,
  name: string,
  imageUrls: string[],
  availableAmount: number,
  price: number,
  rating: number,
  description: string,
  isInCart:	boolean,
  isFavorite:	boolean,
  category: string,
  subCategory: string
}
