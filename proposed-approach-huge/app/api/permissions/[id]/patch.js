module.exports = function PatchPermissionspermissionsid(req, res) {
  res.send({
    command: 'PATCHPermissionspermissionsid',
    resource: 'permissions',
    method: 'PATCH',
    path: '/permissions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};