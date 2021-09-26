export interface IOrder {
  items: IOrdersItems[],
    details: IOrdersDetails,
    id: string
}



export interface IOrdersDetails {
  name: string,
  address: string,
  phone: string,
  timeToDeliver: string,
  comment: string
}


export interface IOrdersItems {
    id: string,
    amount: number
}




