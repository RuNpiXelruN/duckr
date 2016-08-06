import React, { Component, PropTypes } from 'react'
import {Navigation} from 'components'
import {container, innerContainer} from './styles.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

class MainContainer extends Component {
  propTypes: {
    isAuthed: PropType.bool.isRequired,
    fetchingUserSuccess: PropType.func.isRequired,
    authUser: PropType.func.isRequired,
  }
  contextTypes: {
    router: PropType.object.isRequired,
  }
  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if (this.props.loaction.pathname === '/') {
          this.contect.router.replace('feed')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }
  render () {
    return this.props.isFetching === true
      ? null
      :
        <div className={container}>
          <Navigation isAuthed={this.props.isAuthed}/>
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
  }
}

export default connect(
  (state) => ({isAuthed: state.isAuthed, isFetching: state.isFetching}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(MainContainer)
