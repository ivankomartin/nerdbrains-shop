import { useContext } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "@/components/common/card/product-card.component";
import { ProductsContext } from "@context/products.context";

const Shop: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        Shop
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} spacing={2}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
