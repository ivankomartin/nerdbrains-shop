import React from "react";
import { Menu, Button } from "@mui/material";

import { Link } from "react-router-dom";
import CartDropdownMenuItem from "./cart-dropdown-menu-item.component";
import { ICartItem } from "@/types/cart.type";

interface ICartDropdownMenuProps {
  isOpenCart: null | HTMLElement;
  handleMenuClose: () => void;
  menuList: ICartItem[];
}

export default function CartDropdownMenu(
  props: ICartDropdownMenuProps,
): JSX.Element {
  const { isOpenCart, handleMenuClose, menuList } = props;
  return (
    <Menu
      anchorEl={isOpenCart}
      open={Boolean(isOpenCart)}
      onClose={handleMenuClose}
      sx={{
        "& .MuiMenu-list": {
          padding: 0,
        },
      }}
    >
      {menuList.map((item) => (
        <CartDropdownMenuItem key={item.id} menuList={item} />
      ))}
      <Button
        component={Link}
        to="/checkout"
        onClick={handleMenuClose}
        fullWidth
        variant="contained"
        color="primary"
        sx={{ borderRadius: 0 }}
      >
        To the shopping cart
      </Button>
    </Menu>
  );
}
