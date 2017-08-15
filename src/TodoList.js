import React, { Component } from 'react';
import TodoItem from './TodoItem'


import todos from '../data/todolist'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ todos: [...this.state.todos, ...todos] }), 3000)
  }

  updateNewTodo = (ev) => {
    this.setState({ newTodo: ev.target.value })
  }

  addTodo = (ev) => {
    ev.preventDefault();
    this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: '' })
  }

  removeTodo = (removedTodo) => {
    let todos = this.state.todos.filter(todo => todo !== removedTodo)
    this.setState({ todos })
  }

  render() {
    const todos = this.state.todos
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