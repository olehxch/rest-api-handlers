module.exports = function PostUsersusersid(req, res) {
  res.send({
    command: 'POSTUsersusersid',
    resource: 'users',
    method: 'POST',
    path: '/users/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};