import { combineReducers } from 'redux'
import courses from './courses'
import session from './session'
import exercise from './exercise'
import alert from './alert'
import statistics from './statistics'
import profileInfo from './profileInfo'

export const getCoursebyId = (state,id) => {
  console.log("use this", state);
  let courseObj;
  state.courses.courses.map( group => group.category.map( course => {courseObj = course.id === id? course: undefined; return course}))
  console.log("getCourse ", id, courses, courseObj);
  return courseObj;
};

export const help = (state = {helpText:""}, action) => {  return {...state,helpText: "HELPTEXT"} }

export default combineReducers({
  alert,
  courses,
  session,
  exercise,
  statistics,
  help,
  profileInfo
})

