import { TextField, TextFieldProps } from "@mui/material";

type FormInputProps = TextFieldProps & {
  label: string;
};

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      sx={{
        "& .MuiInputBase-input": {
          color: "text-coolGray-900",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "border-coolGray-200",
          },
          "&:hover fieldset": {
            borderColor: "text-coolGray-900",
          },
          "&.Mui-focused fieldset": {
            borderColor: "ring-green-500",
            borderWidth: "2px",
          },
        },
        "& .MuiFormLabel-root.Mui-focused": {
          color: "text-coolGray-800",
        },
        "& .MuiInputLabel-root": {
          color: "text-coolGray-800",
          fontSize: "medium",
          marginBottom: "8px",
        },
        "& .MuiInputBase-root": {
          borderRadius: "lg",
          boxShadow: "shadow-md",
        },
      }}
      {...otherProps}
    />
  );
};

export default FormInput;
