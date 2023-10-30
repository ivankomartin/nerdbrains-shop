import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const signUpWithGoogle = async () => {
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
          Join our community
        </Typography>
        <Typography color="textSecondary">
          Start your journey with our product
        </Typography>
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

        <Button buttonType="primary" /* type="submit" */>Sign Up</Button>
        <button onClick={signUpWithGoogle}>Sign in with Google</button>
        <Typography align="center">
          <span>Already have an account?</span>
          <Link to="/sign-in">
            <Box
              sx={{
                textDecoration: "underline",
                color: "green",
                ":hover": { color: "darkgreen" },
              }}
            >
              Sign In
            </Box>
          </Link>
        </Typography>
      </form>
    </div>
  );
}
