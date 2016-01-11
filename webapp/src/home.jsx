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

    var controlWidth = 400;

    var headerWrapperStyle = {
      textAlign: 'center',
    };

    var cmdHistoryWrapperStyle = {
      border: '1px solid #ccc',
      width: controlWidth,
      height: 300,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'relative',
      margin: 'auto',
      overflow: 'scroll',
      padding: 5,
      verticalAlign: 'bottom',
      marginBottom: '10px !important'
    };

    var cmdHistoryVertAlignStyle = {
      position: 'absolute',
      bottom: 0
    };

    var inputWrapperStyle = {
      border: '1px solid #ccc',
      width: controlWidth,
      height: 45,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'relative',
      margin: 'auto',
      padding: '10px 5px 5px 5px'
    };

    return (
      <div>
        <h2 style={headerWrapperStyle}>Peggy's Adventures. Two.</h2>
        <div style={cmdHistoryWrapperStyle}>
          <div style={cmdHistoryVertAlignStyle}>
            <CommandHistory history={commandHistory} />
          </div>
        </div>
        <div style={inputWrapperStyle}>
          <input type="text" id="userInput" defaultValue="Type something..." /><br />
          <button { ...buttonAttrs } onClick={() => this.onDoCommandButtonClick(document.getElementById('userInput').value)}>Tell Peggy What's What</button>
        </div>

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

    var singleCmdStyle = {
      paddingBottom: 3
    };

    return (
      <div style={singleCmdStyle}>{this.props.value}</div>
    );
  }
}
