import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Provider component only needed in root app. Provides store access to all apps
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expensesActions';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filtersActions';
import getVisibleExpenses from './selectors/expenseSelector';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//  pass in configureStore as props
const jsx = (
  <Provider store={store}>   
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
