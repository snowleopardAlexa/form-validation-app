import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

  const [username, setUsername] = useState("")

  console.log(username)
  return (
    <div className="app">
       <form>
         <FormInput placeholder="Username" setUsername={setUsername} />
         <FormInput placeholder="Email"/>
         <FormInput placeholder="Full Name" />
         <FormInput placeholder="else" />
       </form>
    </div>
  );
}

export default App;
