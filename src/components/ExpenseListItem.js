import React from 'react';

const ExpenseListItem = (props) => (
  <div>
    <h3>{props.expense.description}:</h3>
    <p>{props.expense.amount} created at {props.expense.createdAt}.</p>
  </div>
);

export default ExpenseListItem;