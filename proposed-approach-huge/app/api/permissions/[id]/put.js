module.exports = function PutPermissionspermissionsid(req, res) {
  res.send({
    command: 'PUTPermissionspermissionsid',
    resource: 'permissions',
    method: 'PUT',
    path: '/permissions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};