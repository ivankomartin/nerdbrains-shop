import { Button } from "@mui/material";

interface GoogleSignUpButtonProps {
  onClick: () => void;
}

export const GoogleSignUpButton: React.FC<GoogleSignUpButtonProps> = ({
  onClick,
}) => (
  <Button
    onClick={onClick}
    type="button"
    fullWidth
    variant="contained"
    color="info"
  >
    Sign up With Google
  </Button>
);
