import {
  EShoppingCartAction,
  ICartProduct,
  IShoppingCartState,
} from "@/types/cart.type";

export const addProductToCart = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
  existingProductIndex: number,
): ICartProduct[] => {
  const newProductsInCart = [...state.productsInCart];

  if (existingProductIndex !== -1) {
    const existingProduct = newProductsInCart[existingProductIndex];
    newProductsInCart[existingProductIndex] = {
      ...existingProduct,
      quantity: existingProduct.quantity + 1,
    };
  } else {
    newProductsInCart.push({
      ...(action.payload as ICartProduct),
      quantity: 1,
    });
  }

  return newProductsInCart;
};

export const calculateNewTotalCount = (
  newProductsInCart: ICartProduct[],
): number =>
  newProductsInCart.reduce((total, product) => total + product.quantity, 0);

export const calculateTotalAfterIncrement = (
  state: IShoppingCartState,
): number =>
  state.productsInCart.reduce((total, product) => total + product.quantity, 0);

export const calculateTotalAfterDecrement = (
  state: IShoppingCartState,
): number =>
  state.productsInCart.reduce((total, product) => total + product.quantity, 0);

export const calculateTotalAfterRemoval = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): number =>
  state.productsInCart
    .filter((product) => product.id !== action.payload.id)
    .reduce((total, product) => total + product.quantity, 0);

export const incrementProductQuantity = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): ICartProduct[] =>
  state.productsInCart.map((product) =>
    product.id === action.payload.id
      ? { ...product, quantity: product.quantity + 1 }
      : product,
  );

export const removeProductFromCart = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): ICartProduct[] =>
  state.productsInCart.filter((product) => product.id !== action.payload.id);

export const decrementProductQuantity = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): ICartProduct[] =>
  state.productsInCart.map((product) =>
    product.id === action.payload.id
      ? { ...product, quantity: Math.max(0, product.quantity - 1) }
      : product,
  );

export const findExistingProductIndex = (
  state: IShoppingCartState,
  action: EShoppingCartAction,
): number =>
  state.productsInCart.findIndex((product) => product.id === action.payload.id);
