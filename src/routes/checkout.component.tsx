import React, { useContext } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import {
  HighlightOffOutlined as CloseCircle,
  ArrowCircleLeftOutlined as ArrowSquareLeft,
  ArrowCircleRightOutlined as ArrowSquareRight,
} from "@mui/icons-material";
import { CartContext, ICartItem } from "@context/cart.context";

const Checkout: React.FC = () => {
  const { cartItems, cartCount, addItemsToCart } = useContext(CartContext);

  return (
    <Box py={{ xs: 12, md: 24 }} bgcolor="coolGray.50">
      <Box px={4} mx="auto">
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Box>
            <Typography variant="h6">Checkout</Typography>
            <Typography variant="body2">{cartCount} Items in Cart</Typography>
          </Box>
        </Box>

        <Box boxShadow={1} borderRadius={1} borderColor="coolGray.100">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="body2">Product</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">Description</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">Quantity</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">Price</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">Remove</Typography>
                </TableCell>
              </TableRow>
              {cartItems.map((product: ICartItem) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        style={{
                          width: "40px",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography variant="body2" ml={2}>
                        {product.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">United Kingdom</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Box display="flex" alignItems="center">
                      <ArrowSquareLeft />
                      <Typography variant="body2" mx={4}>
                        {product.quantity}
                      </Typography>
                      <Button onClick={() => addItemsToCart(product)}>
                        <ArrowSquareRight />
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body2" color="green">
                      {product.price}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <CloseCircle />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
