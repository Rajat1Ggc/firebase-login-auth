import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './signin.css';
const Create = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log('error');
      });
  };
  return (
    <div class="login-page">
      <form onSubmit={createAccount}>
        <h1>create your account</h1>
        <div class="inputs">
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
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default Create;
