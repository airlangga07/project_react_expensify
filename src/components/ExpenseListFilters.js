import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';
import { bindActionCreators } from 'redux';

const ExpenseListFilters = (props) => {
  const changeFilter = (filter) => {
    if (filter === 'date') {
      props.sortByDate();
    } else if (filter === 'amount') {
      props.sortByAmount();
    }
  }

  return (
    <div>
      <input type="text" value={props.filters.text} onChange={e => {
          props.setTextFilter(e.target.value);
        }} />
      <select value={props.filters.sortBy} onChange={e => changeFilter(e.target.value)}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setTextFilter, sortByAmount, sortByDate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);