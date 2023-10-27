import React from "react";
import { Box } from "@mui/material";
import SignInForm from "../components/sign-in-form/sign-in-form.component";

const SignIn: React.FC = () => {
  return (
    <Box py={{ xs: 24, md: 32 }} bgcolor="white">
      <Box px={4} mx="auto" maxWidth="sm">
        <SignInForm />
      </Box>
    </Box>
  );
};

export default SignIn;
