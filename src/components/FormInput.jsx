import React, { useState } from "react";
import "./formInput.css";

const FormInput = ({ dataInput, onChange, value }) => {
  const { name, type, placeholder, label, id, errorMensaje, required } =
    dataInput;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
      />
      <span>{errorMensaje}</span>
    </div>
  );
};

export default FormInput;
