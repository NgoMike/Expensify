const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];    // state.concat(action.expense);   // spread operator es6 adds into array w/o mutating orig. state
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.expense.id); // filter returns new array and doesnt change orig. state
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;