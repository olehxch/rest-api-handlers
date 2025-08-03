module.exports = function PutRolesrolesid(req, res) {
  res.send({
    command: 'PUTRolesrolesid',
    resource: 'roles',
    method: 'PUT',
    path: '/roles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};