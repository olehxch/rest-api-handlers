module.exports = function GetUsersusers(req, res) {
  res.send({
    command: 'GETUsersusers',
    resource: 'users',
    method: 'GET',
    path: '/users',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};