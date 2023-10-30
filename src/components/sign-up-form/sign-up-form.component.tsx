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

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignInForm(): ReactElement {
  const theme = useTheme();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if ((error as { code?: string }).code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      }
      console.log("user creation encountered an error", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
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

      <Button
        onClick={logGoogleUser}
        type="button"
        fullWidth
        variant="contained"
        color="info"
      >
        Sign up With Google
      </Button>

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
