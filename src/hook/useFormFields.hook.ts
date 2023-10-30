// hooks/useFormFields.ts
import { useState, ChangeEvent } from "react";

interface FormFields {
  [key: string]: string;
}

function useFormFields(initialState: FormFields) {
  const [formFields, setFormFields] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetFormFields = () => {
    setFormFields(initialState);
  };

  return { formFields, handleChange, resetFormFields };
}

export default useFormFields;
