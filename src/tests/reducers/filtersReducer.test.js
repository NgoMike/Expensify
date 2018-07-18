import moment from 'moment';
import filtersReducer from '../../reducers/filtersReducer';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const action = {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  }
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy: 'amount'
  };
  const action = { 
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  };
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Bill' });
  expect(state.text).toBe('Bill');
});

test('should set startDate filter', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: startDate });
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment().endOf('month');
  const state = filtersReducer(undefined, { type: 'SORT_END_DATE', endDate: endDate });
  expect(state.endDate).toEqual(endDate);
});