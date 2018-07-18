import { addExpense, editExpense, removeExpense } from "../../actions/expensesActions";

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({     // toEqual use for obj or arrays. toBe used for str,num,bool
    type: 'REMOVE_EXPENSE',
    expense: {
      id: '123abc'
    }
  });
});

test('should set id to undefined for remove expense action object', () => {
  const action = removeExpense();
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    expense: {
      id: undefined
    }
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('1223', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1223',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String) // used for dynamic inputs (uuid). Only care that it expects a string
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});