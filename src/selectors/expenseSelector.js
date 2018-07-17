import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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