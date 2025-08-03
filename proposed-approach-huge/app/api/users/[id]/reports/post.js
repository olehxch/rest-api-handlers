module.exports = function PostUsersusersidreports(req, res) {
  res.send({
    command: 'POSTUsersusersidreports',
    resource: 'users',
    method: 'POST',
    path: '/users/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};