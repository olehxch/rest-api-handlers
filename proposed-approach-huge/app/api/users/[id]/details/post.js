module.exports = function PostUsersusersiddetails(req, res) {
  res.send({
    command: 'POSTUsersusersiddetails',
    resource: 'users',
    method: 'POST',
    path: '/users/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};