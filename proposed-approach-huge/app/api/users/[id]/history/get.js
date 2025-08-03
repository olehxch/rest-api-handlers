module.exports = function GetUsersusersidhistory(req, res) {
  res.send({
    command: 'GETUsersusersidhistory',
    resource: 'users',
    method: 'GET',
    path: '/users/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};