import React, { ChangeEvent, FormEvent } from "react";
import { Box, Button, Typography, Link as MuiLink } from "@mui/material";
import TextField from "../common/form/TextField.component";
import { Link as RouterLink } from "react-router-dom";

interface IFormFields {
  [key: string]: string;
}

interface SignUpFieldGroupProps {
  formFields: IFormFields;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const SignInFieldGroup: React.FC<SignUpFieldGroupProps> = ({
  formFields,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
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
);
