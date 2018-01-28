import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = (props) => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Add New</NavLink>
      <button onClick={props.startLogout}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  };
};

export default connect(undefined, mapDispatchToProps)(Header);