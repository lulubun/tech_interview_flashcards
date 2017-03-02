import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Start from './components/Start'
import store from './store';

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
    <Provider store={store}>
      <Start />
    </Provider>,
    document.getElementById('root')
  ),
)
