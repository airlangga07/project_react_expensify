import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExpense } from '../actions/expenses';

class AddExpensePage extends Component {
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
  return bindActionCreators({ addExpense }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddExpensePage);