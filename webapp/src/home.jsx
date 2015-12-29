import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './action-creators'

@connect((state/*, props*/) => {
  return {
    reduxState: state,
    newPosition: state._doCommand.newPosition,
    command: state._doCommand.command,
    isProcessing: state._doCommand.isProcessing
  }
})

export default class Home extends React.Component {
  onDoCommandButtonClick (cmd) {
    this.props.dispatch(actionCreators.doCommand(cmd))
  }
  render () {
    var { reduxState, newPosition, command, isProcessing } = this.props

    var buttonAttrs = {}
    var msgAttrs = {}

    return (
      <div>
        <h2>Welcome to Peggy's Adventures v2</h2>
        <input type="text" id="userInput" defaultValue="Type something..." /><br />
        <button { ...buttonAttrs } onClick={() => this.onDoCommandButtonClick(document.getElementById('userInput').value)}>Execute!</button>
        <br />
        <br />

        <span>
          You told Peggy to '{ command ? `${command}` : '...' }'<br />
          <b>Position:</b> { newPosition ? `${newPosition}` : 'No position yet...' }
        </span>


        <pre>
          redux state = { JSON.stringify(reduxState, null, 2) }
        </pre>
      </div>
    )
  }
}
