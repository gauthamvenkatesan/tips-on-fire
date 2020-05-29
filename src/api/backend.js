/**
 * Mocking client-server processing
 */
import _courses from './courses.json'

const TIMEOUT = 100

export default {
  requestLogin: (dispatch, cb, user ,timeout) => setTimeout(() => cb(dispatch,_courses), timeout || TIMEOUT),
  getCourses: (dispatch, cb ,timeout) => setTimeout(() => cb(dispatch, _courses), timeout || TIMEOUT),
}
