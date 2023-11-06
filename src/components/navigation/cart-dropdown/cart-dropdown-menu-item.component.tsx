import React from "react";
import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// Define the props according to the data you expect
interface ICartDropdownMenuItemProps {
  menuList: {
    imageUrl: string;
    name: string;
    quantity: number;
    price: number;
  };
}

const CartDropdownMenuItem: React.FC<ICartDropdownMenuItemProps> = ({
  menuList,
}: ICartDropdownMenuItemProps) => {
  const { imageUrl, name, quantity, price } = menuList;
  return (
    <MenuItem sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <ListItemIcon>
        <img
          src={imageUrl}
          alt={name}
          style={{ width: 40, height: 30, borderRadius: 4 }}
        />
      </ListItemIcon>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            color="text.primary"
            sx={{ display: "block" }}
          >
            {`${quantity} x $${price.toFixed(2)}`}
          </Typography>
        }
        sx={{ marginLeft: "10px" }}
      />
    </MenuItem>
  );
};

export default CartDropdownMenuItem;
