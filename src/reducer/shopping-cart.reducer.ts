import {
  addProductToCart,
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
    case "ADD_PRODUCT":
      const existingCartItemIndex = findExistingCartItemIndex(state, action);

      const newItemsInCart = addProductToCart(
        state,
        action,
        existingCartItemIndex,
      );

      return {
        ...state,
        itemsInCart: newItemsInCart,
        totalItemsCount: newTotalCountAdd(newItemsInCart),
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        itemsInCart: removeProductFromCart(state, action),
        totalItemsCount: newTotalCountAfterRemoveProductFromCart(state, action),
      };

    case "DECREMENT_PRODUCT":
      return {
        ...state,
        itemsInCart: decrementProductInCart(state, action),
        totalItemsCount: newTotalCountAfterDecrementCountOfProducts(state),
      };

    case "INCREMENT_PRODUCT":
      return {
        ...state,
        itemsInCart: incrementProductInCart(state, action),
        totalItemsCount: newTotalCountAfterIncrementCountOfProducts(state),
      };

    default:
      return state;
  }
};
