import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        {" "}
        {/* BrowerRouter takes 0-1 children, so need div/switch to wrap routes */}
        <Route path="/" component={LoginPage} exact={true} />{" "}
        {/* exact set true for exact path '/'  */}
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />{" "}
        {/* declaring path is opt. This component renders when no other ones matches  */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
