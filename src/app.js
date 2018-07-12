import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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

const EditExpensePage = () => (
  <div>
    This is my edit expense page component.
  </div>
)

const HelpPage = () => (
  <div>
    This is my help page component.
  </div>
)

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>  {/* Link - client side routing with js */}
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <button>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> {/* NavLink activeClassName lets customize with css */}
    </button>
    <button>
      <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
    </button>
    <button>
      <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    </button>
    <button>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </button>
  </header>
)

const routes = (
  <BrowserRouter>
  <div>
    <Header />
    <Switch> {/* BrowerRouter takes 0-1 children, so need div/switch to wrap routes */}
      <Route path="/" component={ExpenseDashboardPage} exact={true} />   {/* exact set true for exact path '/'  */}
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} /> {/* declaring path is opt. This component renders when no other ones matches  */}
    </Switch>
  </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
