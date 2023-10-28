import React, { useState, ChangeEvent, FormEvent, ReactElement } from "react";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { Box, Button } from "@mui/material";
import TextField from "../common/form/TextField.component";
import { toast } from "react-toastify";
import CustomToast from "../common/notification/Notification.component";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm(): ReactElement {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { notification } = CustomToast();

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
      resetFormFields();
    } catch (error) {
      switch ((error as { code?: string }).code) {
        case "auth/wrong-password":
          toast.error("Incorrect password for email.");
          break;
        case "auth/user-not-found":
          toast.error("No user associated with this email.");
          break;
        default:
          toast.error("Upps.. something is wrong, contact support!");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <button
        onClick={() => notification("Toto je úspešná správa!", "success")}
      >
        Zobraziť úspešný toast
      </button>
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
        </Box>
      </form>
      <Box mt={2}>
        <Button
          onClick={signInWithGoogle}
          type="button"
          fullWidth
          variant="contained"
          color="info"
        >
          Sign In With Google
        </Button>
      </Box>
    </>
  );
}
