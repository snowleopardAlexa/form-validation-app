import { useRef } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

 // const [username, setUsername] = useState("")
 const usernameRef = useRef()

// use useRef instead of useState
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef);
  }

  return (
    <div className="app">
       <form onSubmit={handleSubmit}>
         <FormInput refer={usernameRef} placeholder="Username" />
         <FormInput placeholder="Email"/>
         <FormInput placeholder="Full Name" />
         <FormInput placeholder="else" />
         <button>Submit</button>
       </form>
    </div>
  );
}

export default App;
