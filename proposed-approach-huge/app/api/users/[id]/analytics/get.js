module.exports = function GetUsersusersidanalytics(req, res) {
  res.send({
    command: 'GETUsersusersidanalytics',
    resource: 'users',
    method: 'GET',
    path: '/users/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};