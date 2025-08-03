module.exports = function PostPermissionspermissionsid(req, res) {
  res.send({
    command: 'POSTPermissionspermissionsid',
    resource: 'permissions',
    method: 'POST',
    path: '/permissions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};