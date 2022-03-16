export const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
    errorMensaje:
      "Username should be 3-16 characters and shouldn't include any speacial character",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
    errorMensaje: "It should be a valid email address!",
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
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
    errorMensaje: "Passwords don't match!",
  },
];
