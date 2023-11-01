import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import NavigationMenu from "@components/navigation/navigation-menu.component";
import Logo from "@components/common/logo.component";
import NavigationBar from "@components/navigation/navigation-bar.component";

const Navigation: React.FC = () => {
  const theme = useTheme();

  return (
    <Box display="grid" gridTemplateRows="auto 1fr" minHeight="100vh">
      <AppBar
        position="static"
        sx={{
          color: theme.palette.text.primary,
          background: theme.palette.text.secondary,
        }}
      >
        <Toolbar>
          <Box
            display="grid"
            gridTemplateColumns="1fr auto 1fr"
            width="100%"
            alignItems="center"
          >
            <Box textAlign="left">
              <NavigationMenu />
            </Box>
            <Logo />
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <NavigationBar />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
};

export default Navigation;
