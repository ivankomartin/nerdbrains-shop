import { useContext } from "react";
import { CartContext, ICartItem } from "@context/cart.context";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Badge,
  Box,
} from "@mui/material";

interface IProductCardProps {
  product: ICartItem;
}
export default function ProductCard(props: IProductCardProps) {
  const { name, imageUrl, price } = props.product;
  const { addItemsToCart } = useContext(CartContext);

  return (
    <Card
      sx={{
        width: "100%",
        p: 2,
        boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
        position: "relative",
        "&:hover": { boxShadow: "1px 1px 10px rgba(0,0,0,0.2)" },
      }}
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {price} €
        </Typography>
        <Badge
          badgeContent="Sale"
          color="primary"
          sx={{ position: "absolute", top: 2, right: 4 }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => console.log("Detail")}
          >
            Detail
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => addItemsToCart(props.product)}
          >
            Buy
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
