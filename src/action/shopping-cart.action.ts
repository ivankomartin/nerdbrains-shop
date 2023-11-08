import {
  EShoppingCartAction,
  ICartItem,
  IShoppingCartState,
} from "@/types/cart.type";

export const newTotalCountAdd = (newItemsInCart: ICartItem[]): number =>
  newItemsInCart.reduce((total, item) => total + item.quantity, 0);

export const newTotalCountAfterIncrementCountOfProducts = (
  state: IShoppingCartState,
): number =>
  state.itemsInCart.reduce((total, item) => total + item.quantity, 0);

export const newTotalCountAfterDecrementCountOfProducts = (
  state: IShoppingCartState,
): number =>
  state.itemsInCart.reduce((total, item) => total + item.quantity, 0);

export const newTotalCountAfterRemoveProductFromCart = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): number =>
  state.itemsInCart
    .filter((item) => item.id !== action.payload.id)
    .reduce((total, item) => total + item.quantity, 0);

export const incrementProductInCart = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): ICartItem[] =>
  state.itemsInCart.map((item) =>
    item.id === action.payload.id
      ? { ...item, quantity: item.quantity + 1 }
      : item,
  );

export const removeProductFromCart = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): ICartItem[] =>
  state.itemsInCart.filter((item) => item.id !== action.payload.id);

export const decrementProductInCart = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): ICartItem[] =>
  state.itemsInCart.map((item) =>
    item.id === action.payload.id
      ? { ...item, quantity: Math.max(0, item.quantity - 1) }
      : item,
  );

export const findExistingCartItemIndex = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): number =>
  state.itemsInCart.findIndex((item) => item.id === action.payload.id);
