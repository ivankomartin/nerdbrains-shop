import React, { useContext } from "react";
import { Container, Grid, Typography } from "@mui/material";
import PRODUCTS from "@data/shop-data.json";
import ProductCard from "@/components/common/card/product-card.component";
import { ShoppingCartContext } from "@/context/shopping-cart.context";
import { IProduct } from "@/types/product.type";

const Home: React.FC = () => {
  const { dispatch } = useContext(ShoppingCartContext);

  const addToCart = (product: IProduct) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        Zoznam produktov
      </Typography>

      <Grid container spacing={2}>
        {PRODUCTS.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} spacing={2}>
            <ProductCard
              product={product}
              addToCart={() => addToCart(product)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
