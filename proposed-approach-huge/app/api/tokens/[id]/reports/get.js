module.exports = function GetTokenstokensidreports(req, res) {
  res.send({
    command: 'GETTokenstokensidreports',
    resource: 'tokens',
    method: 'GET',
    path: '/tokens/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};