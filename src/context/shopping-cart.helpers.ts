import { CartActionTypes, EShoppingCartAction } from "@/types/cart.type";
import { IProduct } from "@typings/product.type";

export function addProduct(product: IProduct): EShoppingCartAction {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload: product,
  };
}

export function removeProduct(id: number): EShoppingCartAction {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: { id },
  };
}

export function incrementProduct(id: number): EShoppingCartAction {
  return {
    type: CartActionTypes.INCREMENT_PRODUCT,
    payload: { id },
  };
}

export function decrementProduct(id: number): EShoppingCartAction {
  return {
    type: CartActionTypes.DECREMENT_PRODUCT,
    payload: { id },
  };
}
