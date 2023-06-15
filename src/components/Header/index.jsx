import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
