import React, { useContext } from "react";
import { Container, Grid, Typography } from "@mui/material";
import PRODUCTS from "@data/shop-data.json";
import ProductCard from "@/components/common/card/product-card.component";
import { ShoppingCartContext } from "@/context/shopping-cart.context";
import { addProduct } from "@/context/shopping-cart.helpers";

const Home: React.FC = () => {
  const { setShoppingCart } = useContext(ShoppingCartContext);

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
              addToCart={() => setShoppingCart(addProduct(product))}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
