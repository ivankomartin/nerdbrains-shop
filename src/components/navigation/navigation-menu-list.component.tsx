import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NavigationMenuUser from "./navigation-menu-user.component";

const menuLinks = [
  { text: "Checkout", path: "/checkout", icon: <ShoppingCartOutlinedIcon /> },
];

export default function NavigationMenuList(): JSX.Element {
  return (
    <List>
      <NavigationMenuUser />

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
