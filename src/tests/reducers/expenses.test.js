import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set up default expenses array', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE', 
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('Should not remove expense by id if the id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE', 
    id: '-1' 
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4', 
      description : '', 
      note: '', 
      createdAt: 0
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(4);
  expect(state).toEqual([ ...expenses, action.expense ]);
});

test('Should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Water Bill'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({ ...expenses[1], description: action.updates.description });
});

test('Should not edit an expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'THIS WILL NOT UPDATED'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('SHould set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});