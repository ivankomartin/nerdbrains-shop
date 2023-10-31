import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import CartItem from "@components/cart-item/cart-item.component";
import { CartContext } from "@context/cart.context";

import { Paper, List, ListItem, Button, Box } from "@mui/material";

export default function CartDropdown(): JSX.Element {
  const { cartItems } = useContext(CartContext);
  return (
    <Box sx={{ position: "relative" }}>
      <Paper
        sx={{
          position: "absolute",
          right: 0,
          top: "2rem",
          zIndex: 20,
          width: 220,
          maxHeight: "50vh",
          overflow: "auto",
        }}
        elevation={3}
      >
        <List>
          {cartItems.map((cartItem) => (
            <ListItem key={cartItem.id}>
              <CartItem cartItem={cartItem} />
            </ListItem>
          ))}
        </List>
        <Button
          component={RouterLink}
          to="/checkout"
          fullWidth
          sx={{
            py: 3,
            backgroundColor: "green.500",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "green.600",
            },
          }}
        >
          Go to checkout
        </Button>
      </Paper>
    </Box>
  );
}
