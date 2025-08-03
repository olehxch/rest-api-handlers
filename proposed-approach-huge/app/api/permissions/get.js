module.exports = function GetPermissionspermissions(req, res) {
  res.send({
    command: 'GETPermissionspermissions',
    resource: 'permissions',
    method: 'GET',
    path: '/permissions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};