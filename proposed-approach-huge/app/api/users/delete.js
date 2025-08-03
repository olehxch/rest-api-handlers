module.exports = function DeleteUsersusers(req, res) {
  res.send({
    command: 'DELETEUsersusers',
    resource: 'users',
    method: 'DELETE',
    path: '/users',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};