import { useState } from 'react';
import Register from './component/register/register'
import Login from './component/login/login';
import './App.css';

function App() {

  const [register, setRegister] = useState(false)

  return (
    <div className="App">
      {
        register ? <Register setRegister={setRegister}/> : <Login setRegister={setRegister} />
      }
    </div>
  );
}

export default App;
