import { useRef } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

 // const [username, setUsername] = useState("")


// use useRef instead of useState
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target) 
    console.log(Object.fromEntries(data.entries()))

  };

  return (
    <div className="app">
       <form onSubmit={handleSubmit}>
         <FormInput name="username" placeholder="Username" />
         <FormInput name="email" placeholder="Email"/>
         <FormInput name="fullname" placeholder="Full Name" />
         <FormInput name="something" placeholder="something else" />
         <button>Submit</button>
       </form>
    </div>
  );
}

export default App;
