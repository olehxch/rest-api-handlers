module.exports = function PutPermissionspermissions(req, res) {
  res.send({
    command: 'PUTPermissionspermissions',
    resource: 'permissions',
    method: 'PUT',
    path: '/permissions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};