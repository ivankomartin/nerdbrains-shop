import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PRODUCTS from "@data/shop-data.json";
const Home: React.FC = () => {
  const cartItems = PRODUCTS;
  console.log(cartItems[0]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        Zoznam produktov
      </Typography>

      <Grid container spacing={2}>
        {cartItems.map(({ id, name, imageUrl, price }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
            <Box
              border={1}
              padding={2}
              sx={{
                maxWidth: {
                  xs: "300px",
                  sm: "none",
                },
                margin: "auto",
              }}
            >
              {name}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
