import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Provider component only needed in root app. Provides store access to all apps
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expensesActions";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize"; // req. for react-dates
import "react-dates/lib/css/_datepicker.css"; // req. for react-dates
import "./firebase/firebase";

const store = configureStore();
//  pass in configureStore as props
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
