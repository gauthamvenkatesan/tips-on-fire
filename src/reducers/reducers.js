import { combineReducers } from 'redux'
import courses from './courses'
import session from './session'
import exercise from './exercise'
import statistics from './statistics'

export const getCoursebyId = (state,id) => {
  console.log("use this", state);
  let courseObj;
  state.courses.courses.map( group => group.category.map( course => {courseObj = course.id === id? course: undefined; return course}))
  console.log("getCourse ", id, courses, courseObj);
  return courseObj;
};

export default combineReducers({
  courses,
  session,
  exercise,
  statistics
})

