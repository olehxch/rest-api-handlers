module.exports = function GetRolesrolesid(req, res) {
  res.send({
    command: 'GETRolesrolesid',
    resource: 'roles',
    method: 'GET',
    path: '/roles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};