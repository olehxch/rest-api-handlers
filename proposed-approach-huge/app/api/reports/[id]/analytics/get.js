module.exports = function GetReportsreportsidanalytics(req, res) {
  res.send({
    command: 'GETReportsreportsidanalytics',
    resource: 'reports',
    method: 'GET',
    path: '/reports/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};