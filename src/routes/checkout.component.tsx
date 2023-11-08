import React, { useContext } from "react";
import {
  Box,
  Container,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  IconButton,
  Paper,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/CancelOutlined";
import AddIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveIcon from "@mui/icons-material/DoDisturbOnOutlined";
import { ShoppingCartContext } from "@/context/shopping-cart.context";
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from "@/context/shopping-cart.helpers";

const Checkout: React.FC = () => {
  const theme = useTheme();

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Checkout
      </Typography>

      {shoppingCart.totalProductCount > 0 && (
        <Paper>
          <Box p={2}>
            <Table size="small">
              <TableHead>
                <TableRow
                  sx={{
                    "&": {
                      borderRadius: 1,
                      background: "red",
                      backgroundColor: theme.palette.grey[200],
                      border: `1px solid ${theme.palette.divider}`,
                    },
                  }}
                >
                  <TableCell>Product</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="right">Price per piece</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ "& td, & th": { border: 0 } }}>
                {shoppingCart.productsInCart.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{
                      "&:hover": {
                        backgroundColor: theme.palette.grey[100],
                        cursor: "pointer",
                      },
                      "& td": { py: 1 },
                    }}
                  >
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          style={{
                            width: 35,
                            height: 30,
                            marginRight: "10px",
                            borderRadius: 2,
                          }}
                        />
                        <Typography>{product.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() =>
                          setShoppingCart(decrementProduct(product.id))
                        }
                        size="small"
                      >
                        <RemoveIcon />
                      </IconButton>
                      {product.quantity}
                      <IconButton
                        onClick={() =>
                          setShoppingCart(incrementProduct(product.id))
                        }
                        size="small"
                      >
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">${product.price}</TableCell>
                    <TableCell align="right">
                      ${product.price * product.quantity}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() =>
                          setShoppingCart(removeProduct(product.id))
                        }
                        size="small"
                      >
                        <CloseIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Paper>
      )}
      {shoppingCart.totalProductCount === 0 && (
        <Typography component="p">No items</Typography>
      )}
    </Container>
  );
};

export default Checkout;
