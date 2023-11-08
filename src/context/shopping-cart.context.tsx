import { shoppingCartReducer } from "@/reducer/shopping-cart.reducer";
import { EShoppingCartAction, IShoppingCartState } from "@/types/cart.type";
import { useReducer, createContext, ReactNode } from "react";

const initialState: IShoppingCartState = {
  itemsInCart: [],
  totalItemsCount: 0,
};

export const ShoppingCartContext = createContext<{
  state: IShoppingCartState;
  dispatch: React.Dispatch<EShoppingCartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
