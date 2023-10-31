import React from "react";
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const [isOpenCart, setIsOpenCart] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenCart(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsOpenCart(null);
  };

  return (
    <>
      <Menu
        anchorEl={isOpenCart}
        open={Boolean(isOpenCart)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
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

      <Tooltip title="Searching">
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Favorite items">
        <IconButton color="inherit">
          <FavoriteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Shopping cart">
        <IconButton onClick={handleMenuOpen} color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default NavigationBar;
