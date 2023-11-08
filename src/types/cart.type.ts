import { IProduct } from "@typings/product.type";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface IShoppingCartState {
  productsInCart: ICartProduct[];
  totalProductCount: number;
}

export type EShoppingCartAction =
  | { type: "ADD_PRODUCT"; payload: IProduct }
  | { type: "REMOVE_PRODUCT"; payload: { id: number } }
  | { type: "DECREMENT_PRODUCT"; payload: { id: number } }
  | { type: "INCREMENT_PRODUCT"; payload: { id: number } };
