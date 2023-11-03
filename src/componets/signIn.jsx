import React from 'react';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const loginAccount = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedInUser = userCredential.user;
        setUser(loggedInUser);
        if (userCredential) {
          navigate(`/home/${user.email}`);
        } else {
          console.log('fill the nput ');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  // const logout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser(null);
  //       console.log('logout');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
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
    <div className="login-page">
      <form onSubmit={loginAccount}>
        <h1>login your account</h1>
        <div className="inputs">
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
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>OR</div>
      <Link to="/create" className="button" style={{ width: '100%' }}>
        Create Account
      </Link>
    </div>
  );
};

export default SignIn;
