import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expensesExampleData from '../fixtures/expensesExampleData';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expensesExampleData} />);
  expect(wrapper).toMatchSnapshot();
}); 

test('shoulld render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});