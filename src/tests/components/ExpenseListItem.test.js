import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expensesExampleData from '../fixtures/expensesExampleData';

test('should render an expense list item', () => {
  const wrapper = shallow(<ExpenseListItem {...expensesExampleData[0]} />);
  expect(wrapper).toMatchSnapshot();
});