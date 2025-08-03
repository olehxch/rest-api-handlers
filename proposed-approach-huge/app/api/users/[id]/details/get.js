module.exports = function GetUsersusersiddetails(req, res) {
  res.send({
    command: 'GETUsersusersiddetails',
    resource: 'users',
    method: 'GET',
    path: '/users/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};