import {
  LOGIN_SUCCESS,
  LOGOUT 
} from '../constants/ActionTypes'

const initialState = {username:'UserName',loggedIn: false};

const session = (state = initialState, action) => {
  console.log("session reducer", action.type);
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("LOGIN", state);
      return {...state,username:"Gautham Venkatesan", loggedIn: true};
    case LOGOUT:
      return initialState;
      default:
      return state;
  }
}

export default session
