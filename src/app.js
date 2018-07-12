import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component.
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component.
  </div>
);

const routes = (
  <BrowserRouter>
    <div> {/* BrowerRouter takes 0-1 children, so need div to wrap routes */}
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>   {/* exact set true for exact path '/'  */}
      <Route path="/create" component={AddExpensePage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
