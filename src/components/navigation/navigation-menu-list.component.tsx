import React from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const user = {
  name: "Martin Ivanko",
  photo: "@assets/images/user.jpg",
};
const menuLinks = [
  { text: "Checkout", path: "/checkout", icon: <ShoppingCartOutlinedIcon /> },
];

export default function NavigationMenuList(): JSX.Element {
  const { name: userName, photo: userPhoto } = user;
  return (
    <List>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        my={4}
        gap={2}
      >
        <Avatar alt={userName} src={userPhoto} />
        <Typography>{userName}</Typography>
      </Box>

      <Divider />

      {menuLinks.map(({ text, path, icon }) => (
        <ListItem key={text} disablePadding sx={{ display: "block" }}>
          <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
