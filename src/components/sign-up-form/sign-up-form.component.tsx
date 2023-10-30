import { FormEvent, ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Typography from "@mui/material/Typography";
import { Box, Divider, Link as MuiLink } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNotification } from "../../hook/useNotification.hook";
import { getErrorMessage } from "../../utils/firebase/errorHandler.util";
import useFormFields from "../../hook/useFormFields.hook";
import { GoogleSignUpButton } from "../button/GoogleSignUpButton.component";
import { SignUpFieldGroup } from "./sign-in-form-field-group.component";

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
      <SignUpFieldGroup
        formFields={formFields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

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
