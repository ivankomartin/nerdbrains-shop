import { shoppingCartReducer } from "@/reducer/shopping-cart.reducer";
import { EShoppingCartAction, IShoppingCartState } from "@/types/cart.type";
import { useReducer, createContext, ReactNode } from "react";

const initialState: IShoppingCartState = {
  productsInCart: [],
  totalProductCount: 0,
};

export const ShoppingCartContext = createContext<{
  shoppingCart: IShoppingCartState;
  setShoppingCart: React.Dispatch<EShoppingCartAction>;
}>({
  shoppingCart: initialState,
  setShoppingCart: () => null,
});

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [shoppingCart, setShoppingCart] = useReducer(
    shoppingCartReducer,
    initialState,
  );

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
