import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from '../store/reducers';
import App from './components/App';
import axios from 'axios';

declare global {
  interface Window {
    INITIAL_STATE?: { users: any };
  }
}

const axiosInstance = axios.create({
  baseURL: ''
});

const state = window.INITIAL_STATE;
delete window.INITIAL_STATE;

const store = createStore(
  rootReducer,
  // @ts-ignore
  state,
  compose(
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
