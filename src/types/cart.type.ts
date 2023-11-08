import { IProduct } from "@typings/product.type";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface IShoppingCartState {
  productsInCart: ICartProduct[];
  totalProductCount: number;
}

export enum CartActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  INCREMENT_PRODUCT = "INCREMENT_PRODUCT",
  DECREMENT_PRODUCT = "DECREMENT_PRODUCT",
}

export type EShoppingCartAction =
  | { type: CartActionTypes.ADD_PRODUCT; payload: IProduct }
  | { type: CartActionTypes.REMOVE_PRODUCT; payload: { id: number } }
  | { type: CartActionTypes.DECREMENT_PRODUCT; payload: { id: number } }
  | { type: CartActionTypes.INCREMENT_PRODUCT; payload: { id: number } };
