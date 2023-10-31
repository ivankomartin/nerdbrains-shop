import React from "react";
import { Box, Container } from "@mui/material";
import SignUpForm from "@/components/sign-up-form/sign-up-form.component";

const SignUp: React.FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <Container maxWidth="xs">
        <SignUpForm />
      </Container>
    </Box>
  );
};
export default SignUp;
