import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { bindActionCreators } from 'redux';
// import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calendarFocused: null
    }
  }

  changeFilter = (filter) => {
    if (filter === 'date') {
      this.props.sortByDate();
    } else if (filter === 'amount') {
      this.props.sortByAmount();
    };
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => {
      return {
        calendarFocused
      }
    });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={e => {
            this.props.setTextFilter(e.target.value);
          }} />
        <select value={this.props.filters.sortBy} onChange={e => this.changeFilter(e.target.value)}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId='startDateId'
          endDateId='endDateId'
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({ setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate }, dispatch);
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);