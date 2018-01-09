import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({ addExpense }, dispatch);
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(null, mapDispatchToProps)(AddExpensePage);