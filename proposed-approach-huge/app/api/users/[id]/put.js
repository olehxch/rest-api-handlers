module.exports = function PutUsersusersid(req, res) {
  res.send({
    command: 'PUTUsersusersid',
    resource: 'users',
    method: 'PUT',
    path: '/users/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};