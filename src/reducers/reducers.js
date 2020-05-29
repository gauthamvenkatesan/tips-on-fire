import { combineReducers } from 'redux'
import courses from './courses'
import help from './help'
import session from './session'
import exercise from './exercise'

export default combineReducers({
  courses,
  session,
  exercise
})

