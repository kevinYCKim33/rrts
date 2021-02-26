// https://github.com/FEDCAP/single-stop-frontend-code-challenge-SUBMISSIONS/pull/6/files
// yarn add redux react-redux axios redux-thunk
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

// Functional Component Syntax: huge for the future
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
