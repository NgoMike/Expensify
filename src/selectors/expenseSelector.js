const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // if first part = false, checks 2nd part
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); // filters expense descript. if includes text

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => { // sort takes in a compare fn
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1; // 1 = b first. -1 = a first
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export default getVisibleExpenses;