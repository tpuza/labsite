import { Link } from 'gatsby';
import React from 'react';

export default function MenuPrimary(props) {
  return (
    <nav>
      <Link to="/" activeClassName="activeMenuItem">Home</Link>&nbsp;
      <Link to="/contact" activeClassName="activeMenuItem">Contact</Link>&nbsp;
      <Link to="/about" activeClassName="activeMenuItem">About</Link>
    </nav>
  )
}