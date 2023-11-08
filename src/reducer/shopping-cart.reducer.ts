import { EShoppingCartAction, IShoppingCartState } from "@/types/cart.type";

export const shoppingCartReducer = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): IShoppingCartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingCartItemIndex = state.itemsInCart.findIndex(
        (item) => item.id === action.payload.id,
      );
      const newItemsInCart = [...state.itemsInCart];

      const newTotalCountAdd = newItemsInCart.reduce(
        (total, item) => total + item.quantity,
        1,
      );

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
        totalItemsCount: newTotalCountAdd,
      };
    case "REMOVE_ITEM":
      const newItemsAfterRemove = state.itemsInCart.filter(
        (item) => item.id !== action.payload.id,
      );
      const newTotalCountRemove = newItemsAfterRemove.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.id !== action.payload.id,
        ),
        totalItemsCount: newTotalCountRemove,
      };
    case "DECREMENT_ITEM":
      const newTotalCountDecrement = state.itemsInCart.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        ),
        totalItemsCount: newTotalCountDecrement,
      };
    case "INCREMENT_ITEM":
      const newTotalCountIncrement = state.itemsInCart.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
        totalItemsCount: newTotalCountIncrement,
      };
    default:
      return state;
  }
};
