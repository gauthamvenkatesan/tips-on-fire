import { connect } from 'react-redux'
import Header from '../components/header'
import {logOut} from '../actions/action'

const mapStateToProps = (state) => ({
  username : state.session.username,
  loggedIn : state.session.loggedIn  
})

const mapDispatchToProps = dispatch => ({
  logOutHandler : () => {dispatch(logOut())}
 }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
