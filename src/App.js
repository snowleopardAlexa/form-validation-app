import { useRef } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

const [value, seValue] = useState({
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  birthday: "",
  password: "",
  confirmPassowrd: "",
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
    type: "text",
    placeholder: "Password",
    label: "Password"
  },
  {
    id: 7,
    name: "confirmPassword",
    type: "text",
    placeholder: "Confirm Password",
    label: "Confirm Password"
  }
]

// prevent browser from refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app">
       <form onSubmit={handleSubmit}>
         <FormInput name="username" placeholder="Username" />
         
         <button>Submit</button>
       </form>
    </div>
  );
}

export default App;
