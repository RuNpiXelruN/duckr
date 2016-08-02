import React, {Component, PropTypes} from 'react'
import {Navigation} from 'components'
import {container, innerContainer} from './styles.css'
import { connect } from 'react-redux'

class MainContainer extends Component {
  propTypes: {
    isAuthed: PropType.bool.isRequired
  }
  render () {
    console.log('PROPS:', this.props)
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed}/>
        <div className={innerContainer}>
          {this.props.children}
      </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(MainContainer)
