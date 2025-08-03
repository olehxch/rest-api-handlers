module.exports = function DeletePermissionspermissions(req, res) {
  res.send({
    command: 'DELETEPermissionspermissions',
    resource: 'permissions',
    method: 'DELETE',
    path: '/permissions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};