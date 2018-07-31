import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import expenseSelector from "../selectors/expenseSelector";

// stateless component
const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Expenses</span>
        </div>
      ) : (
        props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />; // expense={expense}
        })
      )}
    </div>
  </div>
);

// store HOC fn
const mapStateToProps = state => {
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
