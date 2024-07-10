import { connect } from 'react-redux'
import Profile from '../components/profile'
import {getProfileRequest} from '../actions/action'


const mapStateToProps = (state) => ({
  KeysErrorPecentage_data : state.profile.KeysErrorPecentage_data,
})

const mapDispatchToProps = (dispatch) => ({
  profileRequest : () => getProfileRequest(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
