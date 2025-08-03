module.exports = function PutUsersusersidhistory(req, res) {
  res.send({
    command: 'PUTUsersusersidhistory',
    resource: 'users',
    method: 'PUT',
    path: '/users/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};