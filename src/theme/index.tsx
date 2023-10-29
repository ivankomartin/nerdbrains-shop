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
      light: "#FFE9D5",
      main: "#d32f2f",
      dark: "#7A0916",
    },
    warning: {
      light: "#FFF5CC",
      main: "#ffa000",
      dark: "#7A4100",
    },
    info: {
      light: "#CAFDF5",
      main: "#00B8D9",
      dark: "#003768",
    },
    success: {
      light: "#D3FCD2",
      main: "#00A76F",
      dark: "#004B50",
    },
    divider: "#eeeeee",
    text: {
      primary: "#141414",
    },
  },
});

export default theme;
