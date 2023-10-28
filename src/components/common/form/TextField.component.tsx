import { TextField as MuiTextField } from "@mui/material";

type ExcludeProps = "name" | "value" | "label" | "onChange" | "variant";

interface ITextFieldProps
  extends Omit<React.ComponentProps<typeof MuiTextField>, ExcludeProps> {
  name: string;
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "standard" | "filled" | "outlined";
}

const TextField: React.FC<ITextFieldProps> = ({
  name,
  label,
  value,
  onChange,
  variant = "standard",
  ...rest
}) => {
  return (
    <MuiTextField
      name={name}
      label={label}
      value={value}
      variant={variant}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TextField;
