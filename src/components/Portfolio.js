import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      Here are my Portfolio: 
      <Link to="/portfolio/1">Project 1</Link>
      <Link to="/portfolio/2">Project 2</Link>
    </div>
  )
};

export default Portfolio;