import React, { Component } from 'react';
import TodoItem from './TodoItem'
import { inject, observer } from 'mobx-react'

@inject('todoStore') @observer
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  updateNewTodo = (ev) => {
    this.setState({ newTodo: ev.target.value })
  }

  addTodo = (ev) => {
    ev.preventDefault();
    this.props.todoStore.addTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  removeTodo = (removedTodo) => {
    this.props.todoStore.removeTodo(removedTodo)
  }

  render() {
    const { todos } = this.props.todoStore
    return (
      <div>
        <ul>
          {
            todos.map((todo, i) =>
              <TodoItem key={i} todo={todo} nada='a' removeTodo={this.removeTodo} />
            )
          }
        </ul>
        <form onSubmit={this.addTodo}>
          <input name='newTodo' placeholder='New Todo' value={this.state.newTodo} onChange={this.updateNewTodo} />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoList;