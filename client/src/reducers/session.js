import { createSlice } from '@reduxjs/toolkit'

export const session = createSlice({
    name: 'session',
    initialState: {username:'Gaut',loggedIn: false, showSignUp: false},
    reducers: {
      LOGIN_SUCCESS: (state, action) => {
        const userData = {
          username,
          password,
        };
        userData.username = action.username;
        const expirationTime = new Date(new Date().getTime() + 60000);
        Cookies.set('auth', JSON.stringify(userData), { expires: expirationTime });
        state.username = action.username,
        state.loggedIn = true;
      }, 
      RESUME_SESSION: (state) => {
        const userSessionCookie =JSON.parse(Cookies.get('auth'));
        state.username=userSessionCookie.username,
        state.loggedIn = true;
      },
      LOGOUT: (state) => {
        Cookies.remove('auth');
        state.loggedIn = false;
      },
      SHOW_SIGNUP: (state) => {
        state.showSignUp = true
      },
      SIGNUP_SUCCESS: (state) => {
        state.showSignUp = false;
        state.loggedIn = false;
      },
      RESET_LOGIN: (state) => {
        state.loggedIn = false;
      },        
              
    },
  })

export const {   LOGIN_SUCCESS,
  RESUME_SESSION,
  LOGOUT,
  SHOW_SIGNUP,
  SIGNUP_SUCCESS,
  RESET_LOGIN } = session.actions

export default session.reducer

