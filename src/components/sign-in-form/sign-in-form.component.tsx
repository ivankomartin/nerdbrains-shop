import { FormEvent, ReactElement } from "react";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "@utils/firebase/firebase.utils";
import { Box, Divider, Typography, Link as MuiLink } from "@mui/material";
import { useNotification } from "@hook/useNotification.hook";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getErrorMessage } from "@utils/firebase/errorHandler.util";
import useFormFields from "@hook/useFormFields.hook";
import { GoogleSignUpButton } from "@/components/common/button/google-sign-up-button.component";
import { SignInFieldGroup } from "@components/sign-in-form/sign-in-form-field-group.component";
import RedirectLink from "@components/link/direct-link.component";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm(): ReactElement {
  const { notification } = useNotification();
  const theme = useTheme();
  const navigate = useNavigate();
  const { formFields, handleChange, resetFormFields } =
    useFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      notification("Successfully logged in!", "success");
    } catch (error) {
      notification(getErrorMessage(error as { code?: string }), "error");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(
        formFields.email,
        formFields.password,
      );
      resetFormFields();
      notification("Successfully logged in!", "success");
      navigate("/");
    } catch (error) {
      notification(getErrorMessage(error as { code?: string }), "error");
    }
  };

  return (
    <>
      <Typography variant="h4" component="h1" mb={2}>
        Sign in
      </Typography>

      <SignInFieldGroup
        formFields={formFields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <Box mt={2}>
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

      <Divider variant="fullWidth" sx={{ margin: theme.spacing(4, 0) }} />

      <GoogleSignUpButton onClick={signInWithGoogle} />

      <Divider variant="fullWidth" sx={{ margin: theme.spacing(4, 0) }} />

      <Box textAlign="center">
        <RedirectLink
          text="Dont have an account?"
          textForLink="Sign up"
          url="/sign-up"
        />
      </Box>
    </>
  );
}
