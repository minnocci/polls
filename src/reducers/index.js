import { combineReducers } from 'redux'
import questions from './questions'
import userChoices from './user'

export default combineReducers({
  questions,
  userChoices
})