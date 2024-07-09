/**
 * client-server requests
 */
import _courses from './courses.json'
import * as ACTION from '../actions/action.js'
import {ALERT_VARIANTS} from '../constants/CommonConstants.js'
import resorceConstants from '../constants/ResourceConstants.json'

export default {
  requestLogin: (dispatch, callback, user ,timeout) => postDataEncoded(getRemoteUrl(resorceConstants.restUrl.login), new URLSearchParams({
                                                          'userName': user.userId,
                                                          'password': window.btoa(user.password),
                                                          'keepMeIn': user.keepMeIn
                                                        })).then(data => {
                                                            console.log(data);
                                                            callback(dispatch,_courses)})
                                                          .catch(error => {
                                                            console.log("error response"+ error.message);
                                                            dispatch(ACTION.showAlert("Incorrect username password",ALERT_VARIANTS.DANGER))}
                                                          ),
  requestSignUp: (dispatch, callback, user ) => postDataEncoded(getRemoteUrl(resorceConstants.restUrl.signup), new URLSearchParams({
                                                          'userName': user.userId,
                                                          'password': window.btoa(user.password),
                                                          'keepMeIn': false
                                                        })).then(data => {
                                                            console.log("success "+data);
                                                            dispatch(ACTION.showAlert(data.serverResponse,ALERT_VARIANTS.SUCCESS));
                                                            callback(dispatch,data)})
                                                          .catch(error => {
                                                            console.log("error "+error.message);
                                                            dispatch(ACTION.showAlert(error.message,ALERT_VARIANTS.DANGER))}),
  getCourses: (dispatch) => getData(getRemoteUrl(resorceConstants.restUrl.courses)).then(response => response.json()).then(data => dispatch(ACTION.initSuccess(data))).catch(error => console.error('fetching courses failed:' ,error)),
  getMemberProfile: (dispatch) => getData(getRemoteUrl(resorceConstants.restUrl.profile)).then(response => response.json()).then(data => dispatch(ACTION.initSuccess(data))).catch(error => console.error('fetching courses failed:' ,error))
}

//Get Remote Url from env config
const getRemoteUrl = (path) => {
  let remoteUrl;
  try {    
    remoteUrl = process.env.REACT_APP_API_URL + path;
  } catch (ex) {
    remoteUrl = path;
  }
  return remoteUrl;
};


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
