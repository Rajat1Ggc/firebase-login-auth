import SignIn from './componets/signIn';
import Create from './componets/Create';
import { useState } from 'react';
import './app.css';
function App() {
  const [login, setlogin] = useState(true);
  return (
    <div className="App">
      <div className="login">
        <div>{login ? <SignIn /> : <Create />}</div>
        <div className="account-btn">
          <button onClick={() => setlogin(false)}>Create Account</button>
          <button onClick={() => setlogin(true)}>Login Account</button>
        </div>
      </div>
    </div>
  );
}

export default App;
