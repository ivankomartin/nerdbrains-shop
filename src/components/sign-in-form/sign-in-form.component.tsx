import React, { useState, ChangeEvent, FormEvent, ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm(): ReactElement {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch ((error as { code?: string }).code) {
        case "auth/wrong-password":
          alert("Incorrect password for email.");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email.");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Link to="/">
          <Box sx={{ display: "block", mb: 6 }}>
            <img
              src="https://shuffle.dev/flex-ui-assets/logos/flex-circle-green.svg"
              alt="Flex Logo"
              style={{ height: "64px" }}
            />
          </Box>
        </Link>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Sign in to your account
        </Typography>
        <Typography color="textSecondary">Start your demo version</Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        {/* ... (Form Input Components here) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 6,
          }}
        >
          <div>
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  backgroundImage:
                    "url(https://shuffle.dev/flex-ui-assets/elements/sign-up/checkbox-icon.svg)",
                  backgroundRepeat: "no-repeat",
                },
              }}
            />
            <Typography variant="body2" component="span">
              Remember me
            </Typography>
          </div>
          <Link to="/">
            <Box
              sx={{
                textDecoration: "underline",
                color: "green",
                ":hover": { color: "darkgreen" },
              }}
            >
              Forgot your password?
            </Box>
          </Link>
        </Box>

        <button>Sign In</button>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <Typography align="center">
          <span>Don’t have an account?</span>
          <Link to="/sign-up">
            <Box
              sx={{
                textDecoration: "underline",
                color: "green",
                ":hover": { color: "darkgreen" },
              }}
            >
              Sign up
            </Box>
          </Link>
        </Typography>
      </form>
    </div>
  );
}
