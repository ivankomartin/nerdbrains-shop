import {
  decrementProductInCart,
  findExistingCartItemIndex,
  incrementProductInCart,
  newTotalCountAdd,
  newTotalCountAfterDecrementCountOfProducts,
  newTotalCountAfterIncrementCountOfProducts,
  newTotalCountAfterRemoveProductFromCart,
  removeProductFromCart,
} from "@/action/shopping-cart.action";
import { EShoppingCartAction, IShoppingCartState } from "@/types/cart.type";

export const shoppingCartReducer = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): IShoppingCartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingCartItemIndex = findExistingCartItemIndex(state, action);
      const newItemsInCart = [...state.itemsInCart];

      if (existingCartItemIndex !== -1) {
        const existingCartItem = newItemsInCart[existingCartItemIndex];
        newItemsInCart[existingCartItemIndex] = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
      } else {
        newItemsInCart.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        itemsInCart: newItemsInCart,
        totalItemsCount: newTotalCountAdd(newItemsInCart),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        itemsInCart: removeProductFromCart(state, action),
        totalItemsCount: newTotalCountAfterRemoveProductFromCart(state, action),
      };

    case "DECREMENT_ITEM":
      return {
        ...state,
        itemsInCart: decrementProductInCart(state, action),
        totalItemsCount: newTotalCountAfterDecrementCountOfProducts(state),
      };

    case "INCREMENT_ITEM":
      return {
        ...state,
        itemsInCart: incrementProductInCart(state, action),
        totalItemsCount: newTotalCountAfterIncrementCountOfProducts(state),
      };

    default:
      return state;
  }
};
