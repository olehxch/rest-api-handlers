module.exports = function GetTokenstokensidanalytics(req, res) {
  res.send({
    command: 'GETTokenstokensidanalytics',
    resource: 'tokens',
    method: 'GET',
    path: '/tokens/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};