import 'react-dates/initialize';
import moment from 'moment';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false,
      error: ''
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
    this.setState(() => {
      return { note }
    });
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return { amount }
      });
    };
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => {
        return { createdAt }
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return { calendarFocused: focused }
    });
  };
  
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => {
        return { error: 'Please provide description and amount' }
      });
    } else {
      this.setState(() => {
        return { error: '' }
      });

      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    };
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
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
            type="text" 
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