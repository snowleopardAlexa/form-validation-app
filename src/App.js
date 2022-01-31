import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

const [values, setValues] = useState({
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  birthday: "",
  password: "",
  confirmPassword: "",
});

const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage: "Username should be 5-16 characters and shouldn't include any special character!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address",
    label: "Email",
    required: true,
  },
  {
    id: 3,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    errorMessage: "It must contain letters only",
    label: "First Name",
    pattern: "[a-zA-Z]+",
    required: true,
  },
  {
    id: 4,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    errorMessage: "It must contain letters only",
    label: "Last Name",
    pattern: "[a-zA-Z]+",
    required: true,
  },
  {
    id: 5,
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
  },
  {
    id: 6,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Password should be 6-20 characters and include at least 1 letter, 1 number, and 1 special character.",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 7,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Password don't match.",
    label: "Confirm Password",
    pattern: values.password,
    required: true,
  }
]

// prevent browser from refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  }

  return (
    <div className="app">
       <form className="form" onSubmit={handleSubmit}>
         <h1>Register</h1>
         {inputs.map((input) => (
            <FormInput 
              key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={onChange}
            />
         ))}       
         <button>Submit</button>
       </form>
    </div>
  );
}

export default App;
