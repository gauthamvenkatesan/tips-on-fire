/**
 * client-server requests
 */
import _courses from './courses.json'
import * as ACTION from '../actions/action.js'

export default {
  requestLogin: (dispatch, cb, user ,timeout) => postDataEncoded("http://localhost:8080/login", new URLSearchParams({
                                                          'userName': user.userId,
                                                          'password': window.btoa(user.password),
                                                          'keepMeIn': user.keepMeIn
                                                        })).then(data => {console.log(data); cb(dispatch,_courses)}),
  requestSignUp: (dispatch, callback, user ) => postDataEncoded("http://localhost:8080/signUp", new URLSearchParams({
                                                          'userName': user.userId,
                                                          'password': window.btoa(user.password),
                                                          'keepMeIn': false
                                                        })).then(data => {console.log("success "+data); callback(dispatch,data)}).catch(error => {console.log("error "+error.message); dispatch(ACTION.showAlert(error.message)) }),
  getCourses: (dispatch) => getData("http://localhost:8080/courses").then(response => response.json()).then(data => dispatch(ACTION.initSuccess(data))).catch(error => console.error('fetching courses failed:' ,error))
}

//eslint-disable-next-line
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response; // parses JSON response into native JavaScript objects
}

async function postDataEncoded(url = '', data = {}) {
  // Default options are marked with * 
  
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: data // body data type must match "Content-Type" header
  });
  
  if(response.status === 200){
    console.log("postDataEncoded" + response);
    return response.json(); 
  }else {
    return response.json().then( error => Promise.reject(new Error(error.errorResponse)))
  }
   // parses JSON response into native JavaScript objects
}
