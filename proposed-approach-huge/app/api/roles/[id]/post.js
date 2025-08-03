module.exports = function PostRolesrolesid(req, res) {
  res.send({
    command: 'POSTRolesrolesid',
    resource: 'roles',
    method: 'POST',
    path: '/roles/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};