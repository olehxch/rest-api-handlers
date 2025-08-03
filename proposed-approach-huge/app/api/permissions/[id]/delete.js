module.exports = function DeletePermissionspermissionsid(req, res) {
  res.send({
    command: 'DELETEPermissionspermissionsid',
    resource: 'permissions',
    method: 'DELETE',
    path: '/permissions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};