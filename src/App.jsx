import React, { useState } from "react";
import { inputs } from "./inputs";
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
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
     *FormData crea un objeto de tipo from asi que vamos a usar sus entradas(entries) de cada input  */
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
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
