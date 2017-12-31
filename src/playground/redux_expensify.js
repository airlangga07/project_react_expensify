import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: '9qxh2m09hg0cq8',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 110000,
    createdAt: 0
  }],
  filters: { 
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}