module.exports = function PutUsersusersidanalytics(req, res) {
  res.send({
    command: 'PUTUsersusersidanalytics',
    resource: 'users',
    method: 'PUT',
    path: '/users/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};