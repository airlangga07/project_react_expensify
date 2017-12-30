import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Add New</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
  )
}

export default Header;