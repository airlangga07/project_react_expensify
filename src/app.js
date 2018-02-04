import 'react-dates/initialize';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses, addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 500, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 100800, createdAt: 12000 }));
// store.dispatch(addExpense({ description: 'Food', amount: 50, createdAt: 90000000000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 800, createdAt: 1500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log('test');

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('app'));
      hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});