import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/login'
import {loginUser} from '../actions/action'

var user = {};

const LoginContainer = ({dispatch, loggedIn, user}) => (
  <Login loggedIn={loggedIn} user={user} onClick={
    evnt => {
        evnt.preventDefault();
        loginUser(dispatch, user)
        } 
    }/>
)


const mapStateToProps = (state, ownProps) => ({
   loggedIn : state.session.loggedIn,
   user : user
})


export default connect(
  mapStateToProps,
)(LoginContainer)
