import { useState } from "react";

export const useForm = (callback, initailState = {}) => {
  const [formData, setFormData] = useState(initailState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return {
    handleInputChange,
    handleSubmit,
    formData,
  };
};
