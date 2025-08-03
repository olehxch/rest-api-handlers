module.exports = function PatchUsersusersid(req, res) {
  res.send({
    command: 'PATCHUsersusersid',
    resource: 'users',
    method: 'PATCH',
    path: '/users/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};