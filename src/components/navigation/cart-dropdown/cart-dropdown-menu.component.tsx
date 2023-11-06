import React from "react";
import { Menu, Button } from "@mui/material";

import { Link } from "react-router-dom";
import CartDropdownMenuItem from "./cart-dropdown-menu-item.component";

interface ICartDropdownMenuProps {
  isOpenCart: null | HTMLElement;
  handleMenuClose: () => void;
}

const menuList = [
  {
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
    quantity: 2,
  },
  {
    id: 2,
    name: "Blue Beanie",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18,
    quantity: 1,
  },
];

export default function CartDropdownMenu(
  props: ICartDropdownMenuProps,
): JSX.Element {
  const { isOpenCart, handleMenuClose } = props;
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
        to="/"
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
