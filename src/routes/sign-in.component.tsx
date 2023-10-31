import React from "react";
import SignInForm from "@components/sign-in-form/sign-in-form.component";
import { Box, Container } from "@mui/material";

const SignIn: React.FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <Container maxWidth="xs">
        <SignInForm />
      </Container>
    </Box>
  );
};

export default SignIn;
