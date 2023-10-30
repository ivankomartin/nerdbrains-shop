import React, { useState, ChangeEvent, FormEvent, ReactElement } from "react";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import {
  Box,
  Button,
  Divider,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import TextField from "../common/form/TextField.component";
import { useNotification } from "../../hook/useNotification.component";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm(): ReactElement {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { notification } = useNotification();
  const theme = useTheme();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(
        formFields.email,
        formFields.password,
      );
      notification("Successfully logged in!", "success");
      resetFormFields();
    } catch (error) {
      switch ((error as { code?: string }).code) {
        case "auth/wrong-password":
          notification("Incorrect password for email.", "error");
          break;
        case "auth/user-not-found":
          notification("No user associated with this email.", "error");
          break;
        default:
          notification("Upps.. something is wrong, contact support!", "error");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Typography variant="h4" component="h1" mb={2}>
        Sign in
      </Typography>
      <form onSubmit={handleSignIn}>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <TextField
            label="Email Address"
            name="email"
            autoComplete="current-user"
            value={formFields.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            value={formFields.password}
            onChange={handleChange}
            autoComplete="current-password"
            type="password"
            required
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>

          <Box>
            <Typography variant="body2">
              <MuiLink
                component={RouterLink}
                to="/"
                underline="always"
                color="primary"
              >
                Forgot your password?
              </MuiLink>
            </Typography>
          </Box>
        </Box>
      </form>

      <Divider variant="fullWidth" sx={{ margin: theme.spacing(4, 0) }} />

      <Button
        onClick={signInWithGoogle}
        type="button"
        fullWidth
        variant="contained"
        color="info"
      >
        Sign In With Google
      </Button>

      <Divider variant="fullWidth" sx={{ margin: theme.spacing(4, 0) }} />

      <Box textAlign="center">
        <Typography variant="body2">
          Dont have an account?{" "}
          <MuiLink
            component={RouterLink}
            to="/sign-up"
            underline="always"
            color="primary"
          >
            Sign up
          </MuiLink>
        </Typography>
      </Box>
    </>
  );
}
