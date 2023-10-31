import { Link } from "react-router-dom";
import { Avatar, Typography, Box } from "@mui/material";
import { ICartItem } from "@context/cart.context";

interface ICartItemProps {
  cartItem: ICartItem;
}

const CartItem = ({ cartItem }: ICartItemProps) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: "flex",
        px: 4,
        py: 3,
        textDecoration: "none",
        "&:hover": { backgroundColor: "grey.100" },
      }}
    >
      <Avatar
        src={imageUrl}
        alt={name}
        sx={{ width: 44, height: 44, flexShrink: 0 }}
      />
      <Box sx={{ width: "100%", pl: 3 }}>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="primary">
          {quantity}&nbsp;x&nbsp;{price}&nbsp;€
        </Typography>
      </Box>
    </Box>
  );
};

export default CartItem;
