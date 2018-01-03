import 'react-dates/initialize';
import moment from 'moment';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('Do MMM, YYYY'));

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false
    };
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return { description }
    });
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    console.log(note);
    this.setState(() => {
      return { note }
    });
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => {
        return { amount }
      });
    };
  };

  onDateChange = (createdAt) => {
    this.setState(() => {
      return { createdAt }
    });
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return { calendarFocused: focused }
    });
  };
  
  render() {
    return (
      <div>
        <form>
          <input 
            value={this.state.description} 
            onChange={this.onDescriptionChange} 
            type="text" 
            placeholder="Description" 
            autoFocus 
          />
          <input 
            value={this.state.amount} 
            onChange={this.onAmountChange} 
            type="number" 
            placeholder="Amount" 
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            value={this.state.note} 
            onChange={this.onNoteChange} 
            placeholder="Add a Note for your expense (optional)">
            {this.state.note}
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  };
};