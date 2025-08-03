module.exports = function PutReportsreportsidanalytics(req, res) {
  res.send({
    command: 'PUTReportsreportsidanalytics',
    resource: 'reports',
    method: 'PUT',
    path: '/reports/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};