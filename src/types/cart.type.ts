import { IProduct } from "@typings/product.type";

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IShoppingCartState {
  itemsInCart: ICartItem[];
  totalItemsCount: number;
}

export type EShoppingCartAction =
  | { type: "ADD_ITEM"; payload: IProduct }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "DECREMENT_ITEM"; payload: { id: number } }
  | { type: "INCREMENT_ITEM"; payload: { id: number } };
