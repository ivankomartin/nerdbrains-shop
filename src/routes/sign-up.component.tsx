import React from "react";
import { Box } from "@mui/material";
import SignUpForm from "../components/sign-up-form/sign-up-form.component";

const SignUp: React.FC = () => {
  return (
    <Box py={{ xs: 24, md: 32 }} bgcolor="white">
      <Box px={4} mx="auto" maxWidth="sm">
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default SignUp;
