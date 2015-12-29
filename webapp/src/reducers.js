var initialDoCmdState = {}
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
      var newPosition = ''
      switch (action.result.command.toLowerCase()) {
        case 'go north':
          newPosition = 'in the north'
          break
        case 'go east':
          newPosition = 'in the west'
          break
        case 'go south':
          newPosition = 'in the south'
          break
        case 'go west':
          newPosition = 'in the west'
          break
        default:
          newPosition = 'didn\'t move'
      }

      return {
        ...state,
        time: action.result.time,
        command: action.result.command,
        newPosition: newPosition,
        isProcessing: false
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
