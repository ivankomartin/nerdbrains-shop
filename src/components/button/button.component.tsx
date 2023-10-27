import { Button as MuiButton } from "@mui/material";

type ButtonType = "google" | "primary" | "secondary";

const BUTTON_TYPE_STYLES = {
  google: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    py: 3,
    mb: 6,
    fontSize: "base",
    fontWeight: "medium",
    lineHeight: 6,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "md",
    boxShadow: "sm",
    px: 7,
    color: "coolGray.500",
    borderColor: "coolGray.100",
    "&:hover": {
      borderColor: "coolGray.200",
    },
  },
  primary: {
    display: "inline-block",
    width: "100%",
    py: 3,
    mb: 4,
    fontSize: "base",
    fontWeight: "medium",
    lineHeight: 6,
    textAlign: "center",
    backgroundColor: "green.500",
    borderRadius: "md",
    boxShadow: "sm",
    px: 7,
    color: "green.50",
    "&:hover": {
      backgroundColor: "green.600",
    },
    "&:focus": {
      ring: 2,
      ringColor: "green.500",
      ringOpacity: 0.5,
    },
  },
  secondary: {
    py: 2,
    px: 6,
    backgroundColor: "gray.50",
    "&:hover": {
      backgroundColor: "gray.100",
    },
    fontSize: "sm",
    color: "gray.900",
    fontWeight: "bold",
    borderRadius: "r.xl t.xl",
    transition: "duration-200",
  },
};

interface ButtonProps {
  children: React.ReactNode;
  buttonType: ButtonType;
}

const buttonIcon = (buttonType: ButtonType): React.ReactNode => {
  if (buttonType === "google") {
    return (
      <img
        src="https://shuffle.dev/flex-ui-assets/elements/sign-up/google-icon-sign-up.svg"
        alt=""
        style={{ marginRight: "0.5rem" }}
      />
    );
  }
  return null;
};

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  return (
    <MuiButton sx={BUTTON_TYPE_STYLES[buttonType]} {...otherProps}>
      {buttonIcon(buttonType)}
      {children}
    </MuiButton>
  );
};

export default Button;
