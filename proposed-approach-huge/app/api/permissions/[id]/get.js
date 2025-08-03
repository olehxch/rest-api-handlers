module.exports = function GetPermissionspermissionsid(req, res) {
  res.send({
    command: 'GETPermissionspermissionsid',
    resource: 'permissions',
    method: 'GET',
    path: '/permissions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};