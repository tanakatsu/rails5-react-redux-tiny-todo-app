import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo, addTodo, enableUI, disableUI } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
  return {
    todos: state.todos,
    enabled: state.settings.enabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    addTodoClick: text => {
      dispatch(addTodo(text))
    },
    toggleUI: checked => {
      checked ? dispatch(enableUI()) : dispatch(disableUI())
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default App
