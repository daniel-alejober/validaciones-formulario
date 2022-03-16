import React, { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    coNfirmPassword: "",
  });

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMensaje:
        "Username should be 3-8 characters and shouldn't include any speacial character",
      required: true,
      pattern: "^[A-Za-z0-9]{3,8}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMensaje: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      errorMensaje: "",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMensaje:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 speacial character",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMensaje: "Passwords don't match!",
      required: true,
      pattern: value.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((dataInput) => (
          <FormInput
            key={dataInput.id}
            dataInput={dataInput}
            value={value[dataInput.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
