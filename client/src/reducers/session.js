import {
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_SUCCESS
} from '../constants/ActionTypes'

const initialState = {username:'UserName',loggedIn: false, showSignUp: false};

const session = (state = initialState, action) => {
  console.log("session reducer", action.type);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state,username:"PETER VAN GEIT", loggedIn: true};
    case LOGOUT:
      return initialState;
    case SIGNUP:
        return {...initialState, showSignUp: true}
    case SIGNUP_SUCCESS:
        return {...initialState, showSignUp: false}
    default:
      return state;
  }
}

export default session
