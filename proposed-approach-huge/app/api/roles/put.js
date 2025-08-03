module.exports = function PutRolesroles(req, res) {
  res.send({
    command: 'PUTRolesroles',
    resource: 'roles',
    method: 'PUT',
    path: '/roles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};