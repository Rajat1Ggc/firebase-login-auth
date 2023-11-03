import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import SignIn from './signIn';
import Home from './Home';

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/create" element={<Create />} />
        <Route path="/home/:email" element={<Home />} />
      </Routes>
    </Router>
  );
}
