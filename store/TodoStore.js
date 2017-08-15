import { observable, computed, action } from 'mobx'

import todos from '../data/todolist'

class TodoStore {
  @observable _todos = []

  constructor() {
    setTimeout(() => this._todos = [...this._todos, ...todos], 3000)
  }

  @computed get todos() {
    return this._todos.sort((a, b) => a > b ? 1 : -1)
  }

  @action removeTodo(removed) {
    this._todos = this._todos.filter(todo => todo !== removed)
  }

  @action addTodo(newTodo) {
    this._todos = [...this._todos, newTodo]
  }

}

let todoStore = new TodoStore()

export default todoStore