import React, { useState } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: "^(?=.*[a-zA-Z])(?=.*)(?=.*[!@#$%^&*()_+])[A-Za-z][A-Za-z!@#$%^&*()_+]{7,19}$",
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "ConfirmPassword",
      errorMessage: "Passwords dont't match!",
      label: "ConfirmPassword",
      pattern: values.password,
      required: true
    }
  ]
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  console.log(values)
  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))
        }
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
