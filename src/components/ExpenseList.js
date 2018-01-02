import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  const ExpenseItem = props.expenses.map(expense => {
    return <ExpenseListItem key={expense.id} {...expense} />
  });

  return (
    <div>
      <h1>Expense List</h1>
      {ExpenseItem}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
};

export default connect(mapStateToProps)(ExpenseList);