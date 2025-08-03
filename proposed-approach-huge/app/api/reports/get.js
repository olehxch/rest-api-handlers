module.exports = function GetReportsreports(req, res) {
  res.send({
    command: 'GETReportsreports',
    resource: 'reports',
    method: 'GET',
    path: '/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};