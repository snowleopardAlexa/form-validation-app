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
    label: "Username"
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Email"
  },
  {
    id: 3,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    label: "First Name"
  },
  {
    id: 4,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    label: "Last Name"
  },
  {
    id: 5,
    name: "birthday",
    type: "text",
    placeholder: "Birthday",
    label: "Birthday"
  },
  {
    id: 6,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password"
  },
  {
    id: 7,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password"
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
       <form onSubmit={handleSubmit}>
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
