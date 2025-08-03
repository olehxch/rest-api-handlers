module.exports = function PatchPermissionspermissions(req, res) {
  res.send({
    command: 'PATCHPermissionspermissions',
    resource: 'permissions',
    method: 'PATCH',
    path: '/permissions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};