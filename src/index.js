import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { createStore, compose, applyMiddleware } from "redux";
import Reducers from "./reducers";
import { Provider } from "react-redux";

const composeEnahancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnahancers(applyMiddleware()));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
