const getExpensesTotal = (expenses) => {
  const expensesAmounts = expenses.map((expense) => {
    return expense.amount;
  });
  return expensesAmounts.reduce((total, value) => { return total + value }, 0);
};

export default getExpensesTotal;