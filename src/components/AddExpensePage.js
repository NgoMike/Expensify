import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensesActions';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/'); // automatic redirect with history.push to root page
      }}
    />
  </div>
);

export default connect()(AddExpensePage);