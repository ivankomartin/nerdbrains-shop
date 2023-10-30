import React, { useState, ChangeEvent, FormEvent, ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Typography from "@mui/material/Typography";
import { Box, Button, Divider, Link as MuiLink } from "@mui/material";
import TextField from "../common/form/TextField.component";
import { useTheme } from "@mui/material/styles";
import { useNotification } from "../../hook/useNotification.hook";
import { getErrorMessage } from "../../utils/firebase/errorHandler.util";
import useFormFields from "../../hook/useFormFields.hook";
import { GoogleSignUpButton } from "../button/GoogleSignUpButton.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignInForm(): ReactElement {
  const theme = useTheme();
  const { notification } = useNotification();

  const { formFields, handleChange, resetFormFields } =
    useFormFields(defaultFormFields);

  const signUpWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formFields.password !== formFields.confirmPassword) {
      notification("Passwords do not match!", "error");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password,
      );
      await createUserDocumentFromAuth(user, {
        displayName: formFields.displayName,
      });

      resetFormFields();
      notification("You were successfully signed up.", "success");
    } catch (error) {
      notification(getErrorMessage(error as { code?: string }), "error");
    }
  };

  return (
    <>
      <Typography variant="h4" component="h1" mb={2}>
        Sign up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          <TextField
            label="Display name"
            name="displayName"
            value={formFields.displayName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formFields.email}
            onChange={handleChange}
            type="text"
            autoComplete="user-name"
            required
          />
          <TextField
            label="Password"
            name="password"
            value={formFields.password}
            onChange={handleChange}
            type="password"
            autoComplete="new-password"
            required
          />
          <TextField
            label="Confirm password"
            name="confirmPassword"
            value={formFields.confirmPassword}
            onChange={handleChange}
            type="password"
            autoComplete="new-password"
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </Box>
      </form>

      <Divider variant="fullWidth" sx={{ margin: theme.spacing(2, 0) }} />

      <GoogleSignUpButton onClick={signUpWithGoogle} />

      <Divider variant="fullWidth" sx={{ margin: theme.spacing(2, 0) }} />

      <Box textAlign="center">
        <Typography variant="body2">
          Already have an account?{" "}
          <MuiLink
            component={RouterLink}
            to="/sign-in"
            underline="always"
            color="primary"
          >
            Sign In
          </MuiLink>
        </Typography>
      </Box>
    </>
  );
}
