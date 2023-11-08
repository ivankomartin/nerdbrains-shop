import {
  addProductToCart,
  decrementProductQuantity,
  findExistingProductIndex,
  incrementProductQuantity,
  calculateNewTotalCount,
  calculateTotalAfterDecrement,
  calculateTotalAfterIncrement,
  calculateTotalAfterRemoval,
  removeProductFromCart,
} from "@/action/shopping-cart.action";
import { EShoppingCartAction, IShoppingCartState } from "@/types/cart.type";

export const shoppingCartReducer = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): IShoppingCartState => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const existingProductIndex = findExistingProductIndex(state, action);

      const newProductsInCart = addProductToCart(
        state,
        action,
        existingProductIndex,
      );

      return {
        ...state,
        productsInCart: newProductsInCart,
        totalProductCount: calculateNewTotalCount(newProductsInCart),
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        productsInCart: removeProductFromCart(state, action),
        totalProductCount: calculateTotalAfterRemoval(state, action),
      };

    case "DECREMENT_PRODUCT":
      return {
        ...state,
        productsInCart: decrementProductQuantity(state, action),
        totalProductCount: calculateTotalAfterDecrement(state),
      };

    case "INCREMENT_PRODUCT":
      return {
        ...state,
        productsInCart: incrementProductQuantity(state, action),
        totalProductCount: calculateTotalAfterIncrement(state),
      };

    default:
      return state;
  }
};
