import expensesReducer from '../../reducers/expenses';

test('Should set up default expenses array', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

