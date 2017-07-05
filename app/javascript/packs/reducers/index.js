import { combineReducers } from 'redux'
import todos from './todos'
import settings from './settings'

const todoApp = combineReducers({
  todos,
  settings
})

export default todoApp
