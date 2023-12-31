import React, { useContext } from "react";
import { IconButton, Badge, Tooltip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDropdownMenu from "@components/navigation/cart-dropdown/cart-dropdown-menu.component";
import { ShoppingCartContext } from "@/context/shopping-cart.context";

const CartDropdown: React.FC = () => {
  const [isOpenCart, setIsOpenCart] = React.useState<null | HTMLElement>(null);

  const { shoppingCart } = useContext(ShoppingCartContext);

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
          <Badge badgeContent={shoppingCart.totalProductCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <CartDropdownMenu
        isOpenCart={isOpenCart}
        handleMenuClose={handleMenuClose}
        menuList={shoppingCart.productsInCart}
      />
    </>
  );
};

export default CartDropdown;
