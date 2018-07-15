const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text: text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate: startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate: endDate
});

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };