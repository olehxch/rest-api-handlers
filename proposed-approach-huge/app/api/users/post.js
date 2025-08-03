module.exports = function PostUsersusers(req, res) {
  res.send({
    command: 'POSTUsersusers',
    resource: 'users',
    method: 'POST',
    path: '/users',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};