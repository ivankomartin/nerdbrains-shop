import React from "react";
import { Box, Drawer, IconButton, Tooltip } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NavigationMenuList from "./navigation-menu-list.component";

export default function NavigationMenu(): JSX.Element {
  const [showDrawer, setShowDrawer] = React.useState(false);

  return (
    <>
      <Tooltip title="menu">
        <IconButton aria-label="menu" onClick={() => setShowDrawer(true)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
          }}
          role="presentation"
          onClick={() => setShowDrawer(false)}
          onKeyDown={() => setShowDrawer(false)}
        >
          <NavigationMenuList />
        </Box>
      </Drawer>
    </>
  );
}
