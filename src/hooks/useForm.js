import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return {
    ...form,
    form,
    handleInput,
    handleReset,
  };
};
