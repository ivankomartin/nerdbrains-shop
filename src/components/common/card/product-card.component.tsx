import { ReactElement } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { useTheme } from "@mui/material/styles";
import { IProduct } from "@/types/product.type";

const truncateStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
};

interface IProductCardProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
}

export default function ProductCard({
  product,
  addToCart,
}: IProductCardProps): ReactElement {
  const theme = useTheme();
  const { name, imageUrl, price } = product;
  return (
    <Card sx={{ maxWidth: 300, position: "relative", borderRadius: 6 }}>
      <CardMedia
        component="img"
        sx={{
          maxHeight: 200,
          width: "100%",
          objectFit: "contain",
          objectPosition: "center",
          backgroundColor: "#f4f4f4",
          zIndex: 100,
        }}
        image={imageUrl}
        alt="Paella dish"
      />

      <CardActions
        disableSpacing
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>

      <CardContent sx={{ textAlign: "left", padding: theme.spacing(2, 3, 0) }}>
        <Typography
          variant="h6"
          component="div"
          fontWeight="bold"
          sx={truncateStyle}
        >
          {name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Typography variant="h6" component="span">
            {price} €
          </Typography>
          <CardActions sx={{ marginRight: theme.spacing(-2) }}>
            <IconButton aria-label="detail">
              <ZoomInOutlinedIcon color="primary" />
            </IconButton>
            <IconButton aria-label="buy" onClick={() => addToCart(product)}>
              <ShoppingBagOutlinedIcon color="primary" />
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
