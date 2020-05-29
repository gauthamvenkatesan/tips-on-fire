import React from 'react'
import backend from '../api/backend'
import * as types from '../constants/ActionTypes'
import api from '../api/backend'

export const loginUser = (dispatch,user) => {
  console.log("LoginUser dispatched", dispatch);
  dispatch({type: types.LOGIN_REQUEST, user})
  api.requestLogin(dispatch, loginSuccessHandler,user,1000);
}

export const startTyping = () => {
  return {type: types.START_TYPING}
}

export const showAddExcercise =(show) => {
  return {type: types.SHOW_ADD_EXCERCISE, show}
}

export const addCustomExcercise = (course) => {
  return {type: types.ADD_CUSTOM_EXERCISE, course}
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
  console.log("initApp action ", dispatch);
  api.getCourses(dispatch, appInitHandler,1000);
  return {type: types.INIT}
}

const appInitHandler = (dispatch, initData) => {
  console.log("appInitHandler");
  dispatch({type: types.INIT_SUCCESS, initData})
}

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: types.LOGOUT
  })
}
