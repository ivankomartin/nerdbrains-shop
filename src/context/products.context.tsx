import { useState, createContext, ReactNode } from "react";
import PRODUCTS from "../data/shop-data.json";
import { ICartItem } from "./cart.context";

type ProductsContextType = {
  products: ICartItem[];
  setProducts: React.Dispatch<React.SetStateAction<ICartItem[]>>;
};

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<ICartItem[]>(
    PRODUCTS.map((product) => ({ ...product, quantity: 1 })),
  );

  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
