import React, { Component } from 'react';

import TodoList from './TodoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>THE UGLIEST TO-DO LIST EVER!</h1>
        <TodoList />
      </div>
    );
  }
}
