module.exports = function GetUsersusersidreports(req, res) {
  res.send({
    command: 'GETUsersusersidreports',
    resource: 'users',
    method: 'GET',
    path: '/users/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};