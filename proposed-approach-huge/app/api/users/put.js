module.exports = function PutUsersusers(req, res) {
  res.send({
    command: 'PUTUsersusers',
    resource: 'users',
    method: 'PUT',
    path: '/users',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};