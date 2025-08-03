module.exports = function PostUsersusersidanalytics(req, res) {
  res.send({
    command: 'POSTUsersusersidanalytics',
    resource: 'users',
    method: 'POST',
    path: '/users/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};