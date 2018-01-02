import React, { Component } from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ExpenseListItem = (props) => {
  return (
    <div>
      <h3>{props.description}</h3>
      <p>{props.amount} - {props.createdAt}</p>
      <button onClick={e => props.removeExpense({ id: props.id })}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeExpense }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListItem);