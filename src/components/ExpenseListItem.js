import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expensesActions';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}:</h3>
    <p>{amount} created at {createdAt}.</p>
    <button onClick={() => { 
      dispatch(removeExpense({ id })); 
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);