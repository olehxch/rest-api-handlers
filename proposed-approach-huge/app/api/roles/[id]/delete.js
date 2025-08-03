module.exports = function DeleteRolesrolesid(req, res) {
  res.send({
    command: 'DELETERolesrolesid',
    resource: 'roles',
    method: 'DELETE',
    path: '/roles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};