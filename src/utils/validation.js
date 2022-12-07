
import { useState, useCallback } from "react";

function useValidation() {
  const [values, setValues] = useState({}); // {}
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}

export default useValidation;