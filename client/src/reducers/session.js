import {
  LOGIN_SUCCESS,
  LOGOUT,
  SHOW_SIGNUP,
  SIGNUP_SUCCESS,
  RESET_LOGIN
} from '../constants/ActionTypes'

const initialState = {username:'UserName',loggedIn: false, showSignUp: false};

const session = (state = initialState, action) => {
  console.log("session reducer", action.type);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state,username:"PETER VAN GEIT", loggedIn: true};
    case LOGOUT:
      return initialState;
    case SHOW_SIGNUP:
        return {...initialState, showSignUp: true}
    case SIGNUP_SUCCESS:
        return {...initialState, showSignUp: false, loggedIn: false}
    case RESET_LOGIN:
        return initialState;    
    default:
      return state;
  }
}

export default session
