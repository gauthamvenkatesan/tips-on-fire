import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/profile'

const ProfileContainer = (props) => (
  <Profile></Profile>
)

const mapStateToProps = (state) => ({
  products: state
})

export default connect(
  mapStateToProps
)(ProfileContainer)
