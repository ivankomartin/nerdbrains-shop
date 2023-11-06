import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import CartDropdown from "@components/navigation/cart-dropdown/cart-dropdown.component";

const NavigationBar: React.FC = () => {
  return (
    <>
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

      <CartDropdown />
    </>
  );
};

export default NavigationBar;
