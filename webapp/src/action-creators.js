import Promise from 'bluebird'

export function doCommand(cmd) {
  return {
    types: ['DO_COMMAND_REQUEST', 'DO_COMMAND_SUCCESS', 'DO_COMMAND_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {

        fetch('http://localhost:3000/do-command', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userID: 'test-id',
            command: cmd
          }),
        }).then(response => {

          if (response.status >= 200 && response.status < 300) {
            const json = response.json();
            return json;
          } else {
            reject({
              time: new Date().toString(),
              command: cmd,
              newPosition: none
            });
          }
        }).then(json => {

          resolve({
            time: new Date().toString(),
            command: cmd,
            newPosition: json['newPosition'],
          });

        });


        //setTimeout(() => {
        //  const d = new Date()
        //  const ms = ('000' + d.getMilliseconds()).slice(-3)
        //  resolve({
        //    time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`,
        //    command: cmd,
        //    newPosition: 'some new position'
        //  })
        //}, 2000)
      })
    }
  }
}
