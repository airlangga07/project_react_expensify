import { createStore } from 'redux';

// action generators = functions that return action objects
// const incrementCount = (payload = {}) => {
//   return {
//     type: 'INCREMENT',
//     incrementBy: (typeof payload.incrementBy === 'number') ? payload.incrementBy : 1
//   }
// }

// we can further simplify the incrementCount above by using object destrucuring
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return { 
    type: 'DECREMENT',
    decrementBy
  }
}

const resetCount = () => {
  return {
    type: 'RESET',
  }
}

const setCount = ({ count }) => {
  return {
    type: 'SET',
    count
  }
}

// reducers
// 1. reducers are pure functions
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { count: state.count - action.decrementBy };
    case 'SET':
      return { count: action.count };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}; 

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));