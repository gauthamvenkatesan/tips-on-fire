
import * as types from '../constants/ActionTypes'
import api from '../api/backend'

export const loginUser = (dispatch,user) => {
  dispatch({type: types.LOGIN_REQUEST, user})
  api.requestLogin(dispatch, loginSuccessHandler,user,1000);
}

export const startTyping = (param) => {
  return {type: types.START_TYPING, param}
}

export const showAddExcercise =(show) => {
  return {type: types.SHOW_ADD_EXCERCISE, show}
}

export const updateTimePassed =() => {
  return {type: types.UPDATE_TIME_PASSED}
}

export const addCustomExcercise = (course) => {
  return {type: types.ADD_CUSTOM_EXERCISE, course}
}

export const switchMode = (mode) => {
  return {type: types.SWITCH_BOUNDARY_MODE, mode}
}

export const startCourse = (course) => {
  return{type: types.START_COURSE, course}
}
const loginSuccessHandler = (dispatch,user) => {
  dispatch({type: types.LOGIN_SUCCESS, user})
}

export const keyPressedEvent = (key) => {
  return {type: types.KEY_PRESSED, key}
}

export const initApp = dispatch => {
  api.getCourses(dispatch, appInitHandler,1000);
  return {type: types.INIT}
}

const appInitHandler = (dispatch, initData) => {
  dispatch({type: types.INIT_SUCCESS, initData})
}

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: types.LOGOUT
  })
}
