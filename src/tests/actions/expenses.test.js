import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startEditExpense, startSetExpenses, startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

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
  const store = createMockStore({ auth: { uid } });
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 5612309854
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions({ auth: { uid } });
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });
});

test('Should add expense with defaults to database and store', (done) => {
  const store = createMockStore({ auth: { uid } });
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });
});

test('Should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('Should fetch the expenses from firebase', (done) => {
  const store = createMockStore({ auth: { uid } });
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('Should remove expenses from firebase', (done) => {
  const store = createMockStore({ auth: { uid } });
  const id = expenses[2].id;

  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then(snapshot => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('Should edit expenses from firebase', (done) => {
  const store = createMockStore({ auth: { uid } });
  const id = expenses[0].id;
  const updates = {
    amount: 56890
  };

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id, 
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then(snapshot => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  });
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