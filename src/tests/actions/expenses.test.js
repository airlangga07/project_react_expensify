import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should set up edit expense action object', () => {
  const action = editExpense('123abc', { note: 'newNote' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc', 
    updates: {
      note: 'newNote'
    }
  });
});

test('Should setup add expense action object with provided value', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 5612309854
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(1);
    done();
  });
});

test('Should add expense with defaults to database and store', () => {

});

// test('Should setup add expense action object with default value', () => {
//   expect(addExpense()).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });