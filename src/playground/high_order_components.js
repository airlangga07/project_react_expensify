// High Order Component (HOC) - A component that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAdmin && <p>This is private info, please don't share!</p>}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const requireAuth = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Login to see the info</p>}
      </div>
    );
  };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is the detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the detail" />, document.getElementById('app'));