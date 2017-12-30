import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      404!
      <Link to="/">Go Back</Link>
    </div>
  )
};

export default NotFoundPage;