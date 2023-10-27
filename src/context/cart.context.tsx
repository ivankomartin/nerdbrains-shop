import { useEffect, useState, createContext, ReactNode } from "react";
import { IProduct } from "../types/product.type";

export interface ICartItem extends IProduct {
  quantity: number;
}

type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartItems: ICartItem[];
  addItemsToCart: (product: ICartItem) => void;
  cartCount: number;
};

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
});

const addCartItem = (
  cartItems: ICartItem[],
  productToCart: ICartItem,
): ICartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToCart.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem },
    );
  }

  return [...cartItems, { ...productToCart, quantity: 1 }];
};

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const addItemsToCart = (productToCart: ICartItem) => {
    setCartItems(addCartItem(cartItems, productToCart));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
