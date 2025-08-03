module.exports = function PostPermissionspermissions(req, res) {
  res.send({
    command: 'POSTPermissionspermissions',
    resource: 'permissions',
    method: 'POST',
    path: '/permissions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};