
import * as types from '../constants/ActionTypes'
import api from '../api/backend'

export const loginUser = (dispatch,user) => {
  dispatch({type: types.LOGIN_REQUEST, user})
  api.requestLogin(dispatch, loginSuccessHandler,user,1000);
}

export const logOut = () => {
  return {type: types.LOGOUT}
}

export const showSignUpHandler = () => {
  return {type: types.SHOW_SIGNUP}
}

export const showAlert = (message,variant) => {
  return {type: types.SHOW_ALERT, message:message, variant:variant}
}

export const hideAlert = () => {
  return {type: types.HIDE_ALERT}
}

export const resetLogin = () => {
  return {type: types.RESET_LOGIN}
}


export const signUpRequestHandler = (dispatch,user) => {
  api.requestSignUp(dispatch, signUpSuccessHandler,user,1000);
  return {type: types.SIGNUP_REQUEST}
}

const signUpSuccessHandler =(dispatch,user) => {
  dispatch({type: types.SIGNUP_SUCCESS, user})
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
  api.getCourses(dispatch);
  dispatch({type: types.INIT})
}

export const initSuccess = (initData) => {
  return {type: types.INIT_SUCCESS, initData}
}

export const getProfileRequest = dispatch => {
  api.getMemberProfile(dispatch)
  dispatch({type: types.GET_PROFILE_REQUEST})
}

export const getProfileSuccess = (profileData) => {
  return {type: types.GET_PROFILE_SUCCESS, profileData}
}

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: types.LOGOUT
  })
}
