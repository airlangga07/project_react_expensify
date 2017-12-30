import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => {
  return (
    <div> This is from my dashboard component</div>
  )
};

const AddExpensePage = () => {
  return (
    <div> This is from my add expense component</div>
  )
};

const EditExpensePage = () => {
  return (
    <div> This is from my edit expense component</div>
  )
};

const HelpPage = () => {
  return (
    <div> This is from my help component </div>
  )
};

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));