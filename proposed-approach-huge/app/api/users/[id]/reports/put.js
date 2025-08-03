module.exports = function PutUsersusersidreports(req, res) {
  res.send({
    command: 'PUTUsersusersidreports',
    resource: 'users',
    method: 'PUT',
    path: '/users/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};