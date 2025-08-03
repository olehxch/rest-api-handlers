module.exports = function GetUsersusersid(req, res) {
  res.send({
    command: 'GETUsersusersid',
    resource: 'users',
    method: 'GET',
    path: '/users/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};