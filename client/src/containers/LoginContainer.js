import { connect } from 'react-redux'
import Login from '../components/login'
import {loginUser, showSignUpHandler, signUpRequestHandler, resetLogin, showAlert} from '../actions/action'

var user = {};
const email_regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,63}$/
const password_regex1 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const mapStateToProps = (state, ownProps) => ({
   loggedIn : state.session.loggedIn,
   showSignUp : state.session.showSignUp,
   user : user
})

function validateForm(user, checkConfirmPassword){
  var errs = [];

// return errs =[]; //Dev only
  
  if(!user.userId || !user.userId.match(email_regex)){
    errs.push("Email Id is not valid")
  }else if(checkConfirmPassword && (!user.password || user.password.trim().length === 0)) {
    errs.push("Please enter a password")
  }else if(checkConfirmPassword && (!user.password || !user.password.match(password_regex1))) {
    errs.push("Password is not valid")
    errs.push(" Must contain atleast one lowercase character")
    errs.push(" Must contain atleast one uppercase character")
    errs.push(" Must contain atleast one numeric character")
    errs.push(" Must contain atleast one special character")
    errs.push(" Must of length 6-16 charcters long")
  }else if(checkConfirmPassword && (!user.confirmPassword || !(user.password === user.confirmPassword))) {
    errs.push("Confirm password does not match")    
  }  
  return errs;
}

const mapDispatchToProps = dispatch => ({
  singUpOnClick : (showSignUp) => {if(!showSignUp) {  dispatch(showSignUpHandler()); return;} 
                                    const errors = validateForm(user, true);
                                    errors.length > 0 ? dispatch(showAlert(errors)): dispatch(signUpRequestHandler(dispatch,user))},
  resetLoginHandler : () => {dispatch(resetLogin())},
  onSubmitEvent : (evnt) => {evnt.preventDefault();
                              const form = evnt.currentTarget;
                              const errors = validateForm(user);
                              errors.length > 0 ? dispatch(showAlert(errors)): loginUser(dispatch, user);                            
                            }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
