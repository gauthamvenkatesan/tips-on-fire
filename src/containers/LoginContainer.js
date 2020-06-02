import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/login'
import {loginUser} from '../actions/action'


const LoginContainer = ({dispatch, loggedIn}) => (
  <Login loggedIn={loggedIn} onClick={
      e => {
        e.preventDefault();
        loginUser(dispatch, e)
        } 
    }/>
)


const mapStateToProps = (state, ownProps) => ({
   loggedIn : state.session.loggedIn
})


export default connect(
  mapStateToProps,
)(LoginContainer)
