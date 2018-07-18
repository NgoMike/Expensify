import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../fixtures/expensesExampleData';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    expense: {
      id: expenses[1].id
    }
  };  
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    expense: {
      id: '-1'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'water',
      note: '',
      amount: 200,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense by id', () => {
  const amount = 200;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toEqual(amount);
});

test('should not edit an expense if expense not found', () => {
  const amount = 200;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});