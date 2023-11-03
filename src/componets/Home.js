import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/" className="button">
        logout
      </Link>
    </div>
  );
};

export default Home;
