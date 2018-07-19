import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenseSelector from '../selectors/expenseSelector';

// stateless component
const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (  
        <p>No Expenses</p>
      ) : ( 
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} /> // expense={expense}
          }) 
        )
    }
  </div>
);

// store HOC fn
const mapStateToProps = (state) => {
  return {
    expenses: expenseSelector(state.expenses, state.filters) // use filtered expenses fn
  };
};

// connects takes in fn and choose what is needed from store. invokes the component wrapped
export default connect(mapStateToProps)(ExpenseList);
export { ExpenseList }; // unconnected for testing

// const ConnectedExpenseList = connect((state) => {
//   return {
//      expenses: state.expenses
//   };
// })(ExpenseList);

// export default ConnectedExpenseList;