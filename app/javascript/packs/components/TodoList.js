import React, { Component } from 'react'
import { render } from 'react-dom'

const Todo = ({onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through': 'none'
    }}
  >
    {text}
  </li>
)

const AddTodo = ({ onClick, enabled }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onClick(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit" disabled={!enabled}>
          Add Todo
        </button>
      </form>
    </div>
  )
}

const TodoList = ({ todos, enabled, onTodoClick, addTodoClick, toggleUI }) => (
  <div>
    <AddTodo onClick={addTodoClick} enabled={enabled} />
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => { if (enabled) { onTodoClick(todo.id) } }} />
      ))}
    </ul>
    <input type="checkbox" checked={enabled} onChange={(e) => toggleUI(e.target.checked)} />UI Enabled
  </div>
)

export default TodoList
