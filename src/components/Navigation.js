import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div class="navstyle">
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/contact"> Contact </Link></li>
      </ul>
    </div>
  )
}

export default Navigation;
