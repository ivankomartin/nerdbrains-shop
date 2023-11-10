import React, { useContext } from "react";
import { Box, Container, Table, Typography, Paper } from "@mui/material";

import { ShoppingCartContext } from "@/context/shopping-cart.context";

import TableHead from "@/components/checkout-table/table-head.component";
import TableBody from "@/components/checkout-table/table-body.component";
import { TABLE_HEAD_COLUMNS } from "@/constants/checkout-table.constants";

const Checkout: React.FC = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Checkout
      </Typography>

      {shoppingCart.totalProductCount > 0 ? (
        <Paper>
          <Box p={2}>
            <Table size="small">
              <TableHead columns={TABLE_HEAD_COLUMNS} />
              <TableBody />
            </Table>
          </Box>
        </Paper>
      ) : (
        <Typography component="p">No products in the cart</Typography>
      )}
    </Container>
  );
};

export default Checkout;
