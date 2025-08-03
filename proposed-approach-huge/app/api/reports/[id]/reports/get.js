module.exports = function GetReportsreportsidreports(req, res) {
  res.send({
    command: 'GETReportsreportsidreports',
    resource: 'reports',
    method: 'GET',
    path: '/reports/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};