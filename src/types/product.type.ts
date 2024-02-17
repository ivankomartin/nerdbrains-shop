export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ICollectionOfProducts {
  title: string;
  products: IProduct[];
}

export interface ICollectionOfProducts {}
