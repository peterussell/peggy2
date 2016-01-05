import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './action-creators'

@connect((state/*, props*/) => {
  return {
    reduxState: state,
    newPosition: state._doCommand.newPosition,
    command: state._doCommand.command,
    isProcessing: state._doCommand.isProcessing,
    commandHistory: state._doCommand.commandHistory
  }
})

export default class Home extends React.Component {
  onDoCommandButtonClick (cmd) {
    this.props.dispatch(actionCreators.doCommand(cmd))
  }
  render () {
    var { reduxState, newPosition, commandHistory, command, isProcessing } = this.props

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

        <br />
        <br />
        <CommandHistory history={commandHistory} />

{ /* Uncomment to show redux state in page
        <pre>
          redux state = { JSON.stringify(reduxState, null, 2) }
        </pre>
*/ }
      </div>
    )
  }
}

export class CommandHistory extends React.Component {
  render() {
    var history = [];
    if (this.props.history) {
      history = this.props.history;
    }
    return (
      <div>
      {
        history.map((line) => {
          return (
            <CommandHistoryItem value={line} />
          );
        })
      }
      </div>
    );
  }
}

export class CommandHistoryItem extends React.Component {
  render() {
    return (
      <div style={{marginBottom: 20}}>{this.props.value}</div>
    );
  }
}
