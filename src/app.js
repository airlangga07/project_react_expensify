import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 500, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 100800, createdAt: 12000 }));
// store.dispatch(addExpense({ description: 'Food', amount: 50, createdAt: 90000000000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 800, createdAt: 1500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));