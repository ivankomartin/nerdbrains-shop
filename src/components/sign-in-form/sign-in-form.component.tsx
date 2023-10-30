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
import { useNotification } from "../../hook/useNotification.hook";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { getErrorMessage } from "../../utils/firebase/errorHandler.util";
import useFormFields from "../../hook/useFormFields.hook";
import { GoogleSignUpButton } from "../button/GoogleSignUpButton.component";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm(): ReactElement {
  const { notification } = useNotification();
  const theme = useTheme();
  const { formFields, handleChange, resetFormFields } =
    useFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
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
      notification(getErrorMessage(error as { code?: string }), "error");
    }
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

      <GoogleSignUpButton onClick={signInWithGoogle} />

      <Divider variant="fullWidth" sx={{ margin: theme.spacing(4, 0) }} />

      <Box textAlign="center">
        <Typography variant="body2">
          Dont have an account?{""}
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
