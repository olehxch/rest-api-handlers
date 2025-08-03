module.exports = function GetRolesroles(req, res) {
  res.send({
    command: 'GETRolesroles',
    resource: 'roles',
    method: 'GET',
    path: '/roles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};