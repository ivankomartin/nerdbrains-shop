import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a76b09",
    },
    secondary: {
      main: "#272b09",
      contrastText: "rgba(255,255,255,0.87)",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ffa000",
    },
    info: {
      main: "#303f9f",
    },
    success: {
      main: "#388e3c",
    },
    divider: "#eeeeee",
    text: {
      primary: "#141414",
    },
  },
});

export default theme;
