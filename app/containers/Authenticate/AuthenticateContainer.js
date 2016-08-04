import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

const AuthenticateContainer = React.createClass ({
  propTypes: {
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },

  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => {
        this.context.router.replace('feed')
      })
  },

  render () {
    return (
      <Authenticate
        error={this.props.error}
        isFetching={this.props.isFetching}
        onAuth={this.handleAuth}/>
    )
  }
})

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
