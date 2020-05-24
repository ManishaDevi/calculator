import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/reducers/calculateReducer';

const exampleInitialState = {};
//created store and passed in reducer and a default state
const store =  createStore(reducer,exampleInitialState);
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
