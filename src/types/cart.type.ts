import { IProduct } from "@typings/product.type";

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IShoppingCartState {
  itemsInCart: ICartItem[];
  totalItemsCount: number;
}

export type EShoppingCartAction =
  | { type: "ADD_PRODUCT"; payload: IProduct }
  | { type: "REMOVE_PRODUCT"; payload: { id: number } }
  | { type: "DECREMENT_PRODUCT"; payload: { id: number } }
  | { type: "INCREMENT_PRODUCT"; payload: { id: number } };
