import React, { ChangeEvent, FormEvent } from "react";
import { Box, Button } from "@mui/material";
import TextField from "@components/common/form/text-field.component";

interface IFormFields {
  [key: string]: string;
}

interface SignUpFieldGroupProps {
  formFields: IFormFields;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const SignUpFieldGroup: React.FC<SignUpFieldGroupProps> = ({
  formFields,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <TextField
        label="Display name"
        name="displayName"
        value={formFields.displayName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formFields.email}
        onChange={handleChange}
        type="text"
        autoComplete="user-name"
        required
      />
      <TextField
        label="Password"
        name="password"
        value={formFields.password}
        onChange={handleChange}
        type="password"
        autoComplete="new-password"
        required
      />
      <TextField
        label="Confirm password"
        name="confirmPassword"
        value={formFields.confirmPassword}
        onChange={handleChange}
        type="password"
        autoComplete="new-password"
        required
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign In
      </Button>
    </Box>
  </form>
);
