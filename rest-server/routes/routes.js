var appRouter = function(app) {
  app.post("/do-command", function(req, res) {
    var uid = req.body.userID;
    var cmd = req.body.command;
    console.log("/do-command received a POST request with User ID:", uid, ", Command:", cmd);

    var hasErr = false;
    var errMsg = "";

    if (!uid) {
      hasErr = true;
      errMsg += "User ID missing; ";
    }
    if (!cmd) {
      hasErr = true;
      errMsg += "Command missing; ";
    }

    if (hasErr) {
      return res.json({"status": "error", "message": errMsg});
    }

    var newPosition = ''
    switch (cmd.toLowerCase()) {
      case 'go north':
        newPosition = 'in the north (from rest-server)';
        break;
      case 'go east':
        newPosition = 'in the east (from rest-server)';
        break;
      case 'go south':
        newPosition = 'in the south (from rest-server)';
        break;
      case 'go west':
        newPosition = 'in the west (from rest-server)';
        break;
      default:
        newPosition = 'didn\'t move (from rest-server)';
    }

    console.log('newPosition: ', newPosition);

    // Can this (or should this) be moved to a separate file?
    res.json({
      status: 'success',
      message: 'Executing command ' + cmd,
      newPosition: newPosition
    });
  });
}

module.exports = appRouter;
