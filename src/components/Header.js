import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>My Porfolio</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
    </header>
  )
}

export default Header;