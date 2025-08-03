module.exports = function PutUsersusersiddetails(req, res) {
  res.send({
    command: 'PUTUsersusersiddetails',
    resource: 'users',
    method: 'PUT',
    path: '/users/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};