import React, { useContext } from "react";
import { Avatar, Box, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "@/context/current-user.context";
import { signOutUser } from "@/utils/firebase/firebase.utils";

export default function NavigationMenuUser(): JSX.Element {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      my={4}
      gap={2}
    >
      {currentUser ? (
        <>
          <Avatar
            alt={currentUser.email || "User"}
            src={currentUser.photoURL || ""}
          />
          <Typography>
            {currentUser.displayName || currentUser.email}
          </Typography>
          <MuiLink component={Link} to="/" onClick={() => signOutUser()}>
            Sign out
          </MuiLink>
        </>
      ) : (
        <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
          <Avatar alt="User" src="" />
          <Box display="flex" alignItems="center" gap={2}>
            <MuiLink component={Link} to="/sign-in">
              Sign in
            </MuiLink>
            <Typography>or</Typography>
            <MuiLink component={Link} to="/sign-up">
              Sign up
            </MuiLink>
          </Box>
        </Box>
      )}
    </Box>
  );
}
