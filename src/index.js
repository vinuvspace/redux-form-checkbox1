import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import Form from "./Form";
import "./styles.css";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
