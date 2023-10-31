import { Button, Box, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "@context/cart.context";
import CartDropdown from "@components/cart-dropdown/cart-dropdown";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <Box>
      <Button onClick={toggleIsCartOpen} sx={{ ml: 4, p: 0 }}>
        <Badge badgeContent={cartCount} color="primary" overlap="circular">
          <ShoppingCartIcon sx={{ width: 32, height: 32 }} />
        </Badge>
      </Button>
      {isCartOpen && <CartDropdown />}
    </Box>
  );
};

export default CartIcon;
