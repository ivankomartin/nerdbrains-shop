import React from "react";
import {
  TableCell,
  TableRow,
  Box,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/CancelOutlined";
import AddIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveIcon from "@mui/icons-material/DoDisturbOnOutlined";
import { ICartProduct } from "@/types/cart.type";

interface ITableBodyRowProps {
  product: ICartProduct;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const TableBodyRow = ({
  product,
  onIncrement,
  onDecrement,
  onRemove,
}: ITableBodyRowProps): JSX.Element => {
  const theme = useTheme();

  const { id, imageUrl, name, quantity, price } = product;

  return (
    <TableRow
      key={id}
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
            src={imageUrl}
            alt={name}
            style={{
              width: 35,
              height: 30,
              marginRight: "10px",
              borderRadius: 2,
            }}
          />
          <Typography>{name}</Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={onDecrement} size="small">
          <RemoveIcon />
        </IconButton>
        {quantity}
        <IconButton onClick={onIncrement} size="small">
          <AddIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">${price}</TableCell>
      <TableCell align="right">${price * quantity}</TableCell>
      <TableCell align="right">
        <IconButton onClick={onRemove} size="small">
          <CloseIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableBodyRow;
