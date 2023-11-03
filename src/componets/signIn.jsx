import React from 'react';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import './signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const loginAccount = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedInUser = userCredential.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log('logout');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div class="login-page">
      <form onSubmit={loginAccount}>
        <h1>login your account</h1>
        <div class="inputs">
          <input
            type="email"
            value={email}
            placeholder="Enter yorr Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter yorr Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {user ? (
          <>
            <p>wellcome, {user.email}</p>
            <button onClick={logout}>logout</button>
          </>
        ) : (
          <p>YOU ARE NOT LOGIN please signIn</p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
