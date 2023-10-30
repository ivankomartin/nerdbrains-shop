import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    light: "#fae1b9",
    main: "#b5740b",
    dark: "#5f3d07",
  },
  secondary: {
    main: "#272b09",
    contrastText: "rgba(255,255,255,0.87)",
  },
  white: {
    main: "#ffffff",
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
    main: "#08adca",
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
};

const theme = createTheme({
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "11px 32px",
          fontSize: 14,
          textTransform: "inherit",
        },
      },
      variants: [
        {
          props: { color: "info" },
          style: {
            background: palette.info.dark,
            color: palette.info.light,
            "&:hover": {
              background: palette.info.main,
            },
          },
        },
      ],
    },
  },
});

export default theme;
