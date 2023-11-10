import React, { useContext } from "react";
import { TableBody as MuiTableBody } from "@mui/material";
import { ShoppingCartContext } from "@/context/shopping-cart.context";
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from "@/context/shopping-cart.helpers";
import TableBodyRow from "./table-body-row.component";

const TableBody = (): JSX.Element => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  return (
    <MuiTableBody sx={{ "& td, & th": { border: 0 } }}>
      {shoppingCart.productsInCart.map((product) => (
        <TableBodyRow
          key={product.id}
          product={product}
          onIncrement={() => setShoppingCart(incrementProduct(product.id))}
          onDecrement={() => setShoppingCart(decrementProduct(product.id))}
          onRemove={() => setShoppingCart(removeProduct(product.id))}
        />
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
