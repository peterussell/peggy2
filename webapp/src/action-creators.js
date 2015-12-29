import Promise from 'bluebird'

export function doCommand(cmd) {
  return {
    types: ['DO_COMMAND_REQUEST', 'DO_COMMAND_SUCCESS', 'DO_COMMAND_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
          // An async request to the actual game server goes here

          const d = new Date()
          const ms = ('000' + d.getMilliseconds()).slice(-3)
          resolve({
            time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`,
            command: cmd,
            newPosition: 'some new position'
          })
        }, 2000)
      })
    }
  }
}
