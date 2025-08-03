module.exports = function DeleteUsersusersid(req, res) {
  res.send({
    command: 'DELETEUsersusersid',
    resource: 'users',
    method: 'DELETE',
    path: '/users/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};