import { useState, ChangeEvent } from "react";

interface FormFields {
  [key: string]: string;
}

interface UseFormFieldsReturnType {
  formFields: FormFields;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetFormFields: () => void;
}

function useFormFields(initialState: FormFields): UseFormFieldsReturnType {
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
