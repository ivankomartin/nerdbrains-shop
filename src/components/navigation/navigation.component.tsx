import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { signOutUser } from "./../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

interface NavLink {
  id: number;
  title: string;
  link: string;
}

export default function Navigation() {
  const { currentUser } = useContext(UserContext);

  const navigationLinks: NavLink[] = [
    {
      id: 1,
      title: "Shop",
      link: "/shop",
    },
    {
      id: 2,
      title: "Checkout",
      link: "/checkout",
    },
    {
      id: 3,
      title: "Pricing",
      link: "/",
    },
  ];

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Link to="/">
            <img
              style={{ height: "32px" }}
              src="https://shuffle.dev/flex-ui-assets/logos/flex-ui-green-light.svg"
              alt="Flex UI Logo"
            />
          </Link>
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Flex UI
        </Typography>
        <List
          component="nav"
          aria-label="main mailbox folders"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {navigationLinks.map((navLink) => (
            <ListItem button key={navLink.id}>
              <Link to={navLink.link}>
                <Typography variant="body1">{navLink.title}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider orientation="vertical" flexItem />
        {!currentUser ? (
          <>
            <Button variant="outlined" component={Link} to="/sign-in">
              Log In
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/sign-up"
            >
              Sign Up
            </Button>
          </>
        ) : (
          <Button color="secondary" onClick={signOutUser}>
            Log out
          </Button>
        )}
        <CartIcon />
      </Toolbar>
    </AppBar>
  );
}
