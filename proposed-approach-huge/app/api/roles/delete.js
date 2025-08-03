module.exports = function DeleteRolesroles(req, res) {
  res.send({
    command: 'DELETERolesroles',
    resource: 'roles',
    method: 'DELETE',
    path: '/roles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};