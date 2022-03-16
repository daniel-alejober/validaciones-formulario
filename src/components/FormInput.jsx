import React from "react";
import "./formInput.css";

const FormInput = ({ dataInput, onChange, value }) => {
  const { name, type, placeholder, label, id, errorMensaje } = dataInput;
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
      />
      <span>{errorMensaje}</span>
    </div>
  );
};

export default FormInput;
