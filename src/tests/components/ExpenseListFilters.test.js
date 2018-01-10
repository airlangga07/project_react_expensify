import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters} 
      setTextFilter={setTextFilter} 
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('Should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilter with altFilters', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: { value: altFilters.text }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test('Should sort by date', () => {
  wrapper.find('select').simulate('change', {
    target: { value: filters.sortBy }
  });
  expect(sortByDate).toHaveBeenCalled();
})

test('Should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: altFilters.sortBy }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate: altFilters.startDate, endDate: altFilters.endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('Should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});