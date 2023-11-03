import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const createAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
          navigate('/Home');
        } else {
          console.log('hh');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      <form onSubmit={createAccount}>
        <h1>create your account</h1>
        <div className="inputs">
          <input
            type="email"
            value={email}
            placeholder="enter yor mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter yor password"
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>OR</div>

      <Link to="/signIn" className="button" style={{ width: '100%' }}>
        Login Account
      </Link>
    </div>
  );
};

export default Create;
