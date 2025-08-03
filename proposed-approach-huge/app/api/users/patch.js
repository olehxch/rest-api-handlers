module.exports = function PatchUsersusers(req, res) {
  res.send({
    command: 'PATCHUsersusers',
    resource: 'users',
    method: 'PATCH',
    path: '/users',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};