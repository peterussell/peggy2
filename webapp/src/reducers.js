var initialDoCmdState = { commandHistory: []}
// The reducer is named with leading "_" to avoid having state.time.time when reading from state.
// It's just a personal preference here, may not be necessary depending on reduer naming and what
// properties they expose in Redux's store.

export function _doCommand(state = initialDoCmdState, action) {
  console.log('_doCommand reducer called with state', state, 'and action', action)

  console.log('Command value:', action.cmd)
  switch (action.type) {
    case 'DO_COMMAND_REQUEST':
      return {
        ...state,
        isProcessing: true
      }
    case 'DO_COMMAND_SUCCESS':

      var history = state.commandHistory.slice();
      history.push('Command: ' + action.result.command);
      history.push('Result: ' + action.result.newPosition);

      return {
        ...state,
        time: action.result.time,
        command: action.result.command,
        newPosition: action.result.newPosition,
        isProcessing: false,
        commandHistory: history
      }
    case 'DO_COMMAND_FAILURE':
      return {
        ...state,
        isProcessing: false
      }
    default:
      return state
  }
}
