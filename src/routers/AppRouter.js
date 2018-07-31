import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
  // Router allows passing in own history while BroswerRouter, history is built in
  <Router history={history}>
    <div>
      <Switch>
        {/* BrowerRouter takes 0-1 children, so need div/switch to wrap routes */}
        <Route path="/" component={LoginPage} exact={true} />{" "}
        {/* exact set true for exact path '/'  */}
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />{" "}
        {/* declaring path is opt. This component renders when no other ones matches  */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
