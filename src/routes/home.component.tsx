import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import PRODUCTS from "@data/shop-data.json";
import ProductCard from "@/components/common/card/product-card.component";

const Home: React.FC = () => {
  const productList = PRODUCTS.map((product) => ({
    ...product,
    quantity: 2,
  })); // nema byt quantity ale klasicke produkt len

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        Zoznam produktov
      </Typography>

      <Grid container spacing={2}>
        {productList.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} spacing={2}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
