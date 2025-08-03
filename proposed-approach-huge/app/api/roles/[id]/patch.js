module.exports = function PatchRolesrolesid(req, res) {
  res.send({
    command: 'PATCHRolesrolesid',
    resource: 'roles',
    method: 'PATCH',
    path: '/roles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};