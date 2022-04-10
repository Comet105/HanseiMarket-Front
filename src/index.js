import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import { GlobalStyle } from "./GlobalStyle";
import axios from "axios";
import persistedReducer from "./store/reducers";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.withCredentials = true;

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(promiseMiddlerware, reduxThunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
