import React, { useContext } from "react";
import { IconButton, Badge, Tooltip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDropdownMenu from "@components/navigation/cart-dropdown/cart-dropdown-menu.component";
import { ShoppingCartContext } from "@/context/shopping-cart/shopping-cart.context";

const CartDropdown: React.FC = () => {
  const [isOpenCart, setIsOpenCart] = React.useState<null | HTMLElement>(null);

  const { state } = useContext(ShoppingCartContext);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenCart(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsOpenCart(null);
  };

  return (
    <>
      <Tooltip title="Shopping cart">
        <IconButton onClick={handleMenuOpen} color="inherit">
          <Badge badgeContent={state.totalItemsCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <CartDropdownMenu
        isOpenCart={isOpenCart}
        handleMenuClose={handleMenuClose}
        menuList={state.itemsInCart}
      />
    </>
  );
};

export default CartDropdown;
