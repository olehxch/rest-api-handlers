module.exports = function PostRolesroles(req, res) {
  res.send({
    command: 'POSTRolesroles',
    resource: 'roles',
    method: 'POST',
    path: '/roles',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};