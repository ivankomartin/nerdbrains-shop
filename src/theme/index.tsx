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
    secondary: "#ffffff",
  },
};

const theme = createTheme({
  palette,
  shadows: [
    "none",
    "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
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
