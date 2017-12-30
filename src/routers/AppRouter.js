import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:id" component={Project} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;