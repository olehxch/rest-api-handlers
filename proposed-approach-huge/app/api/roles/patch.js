module.exports = function PatchRolesroles(req, res) {
  res.send({
    command: 'PATCHRolesroles',
    resource: 'roles',
    method: 'PATCH',
    path: '/roles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};