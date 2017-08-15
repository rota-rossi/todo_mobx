import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'mobx-react'

import todoStore from '../store/TodoStore'

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <App />
  </Provider>
  , document.getElementById('root'))