module.exports = function PostUsersusersidhistory(req, res) {
  res.send({
    command: 'POSTUsersusersidhistory',
    resource: 'users',
    method: 'POST',
    path: '/users/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};