let nextTodoId = 1

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const enableUI = () => {
  return {
    type: 'UI_ENABLE'
  }
}

export const disableUI = () => {
  return {
    type: 'UI_DISABLE'
  }
}
