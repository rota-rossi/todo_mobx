import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { removeTodo, todo } = this.props
    return (
      <li>{todo} <button onClick={() => removeTodo(todo)}>X</button>
      </li>
    );
  }
}