import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const style = {
    color: 'black',
    textDecoration: 'none',
  };
  return (
    <header>
      <nav>
        <Link style={style} to="/">
          <h4>Math Magicians</h4>
        </Link>
        <ul>
          <Link className="nav-link" to="/">
            <li className="border">Home</li>
          </Link>
          <Link className="nav-link" to="./Calculator">
            <li className="border">Calculator</li>
          </Link>
          <Link className="nav-link" to="/Quote">
            <li>Quote</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
