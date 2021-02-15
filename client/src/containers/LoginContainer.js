import { connect } from 'react-redux'
import Login from '../components/login'
import {loginUser, signUpHandler, signUpRequestHandler} from '../actions/action'

var user = {};

const mapStateToProps = (state, ownProps) => ({
   loggedIn : state.session.loggedIn,
   showSignUp : state.session.showSignUp,
   user : user
})

const mapDispatchToProps = dispatch => ({
  singUpOnClick : (showSignUp) => {!showSignUp ? dispatch(signUpHandler()) : dispatch(signUpRequestHandler(dispatch,user))},
  onSubmitEvent : (evnt) => {evnt.preventDefault();
                        var form = evnt.currentTarget;
                        form.checkValidity() == false ? "" :  loginUser(dispatch, user)}
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
