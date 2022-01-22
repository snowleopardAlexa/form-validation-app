import { useRef } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

 // const [username, setUsername] = useState("")
 const usernameRef = useRef()

  console.log(usernameRef)
  return (
    <div className="app">
       <form>
         <FormInput refer={usernameRef} placeholder="Username" />
         <FormInput placeholder="Email"/>
         <FormInput placeholder="Full Name" />
         <FormInput placeholder="else" />
       </form>
    </div>
  );
}

export default App;
