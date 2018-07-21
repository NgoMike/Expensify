import getExpensesTotal from '../../selectors/expenses-total';
import expensesExampleData from '../fixtures/expensesExampleData';

test('should return 0 if no expense', () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const result = getExpensesTotal([expensesExampleData[0]]);
  expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const result = getExpensesTotal(expensesExampleData);
  expect(result).toBe(114195);
});
