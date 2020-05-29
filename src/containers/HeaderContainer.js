import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'

const mapStateToProps = (state) => ({
  username : state.session.username
})

export default connect(
  mapStateToProps
)(Header)
