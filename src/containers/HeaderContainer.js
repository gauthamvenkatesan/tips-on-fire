import { connect } from 'react-redux'
import Header from '../components/header'

const mapStateToProps = (state) => ({
  username : state.session.username,
  loggedIn : state.session.loggedIn
})

export default connect(
  mapStateToProps
)(Header)
