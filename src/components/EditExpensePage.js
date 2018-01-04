import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

class EditExpensePage extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (expense) => {
    this.props.editExpense(this.props.match.params.id, expense);
    this.props.history.push('/');
  }

  onRemove = (id) => {
    this.props.removeExpense({ id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={e => this.onRemove(this.props.match.params.id)}>Remove</button>
      </div>
    )
  };
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ editExpense, removeExpense }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);