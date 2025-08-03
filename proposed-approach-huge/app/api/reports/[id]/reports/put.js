module.exports = function PutReportsreportsidreports(req, res) {
  res.send({
    command: 'PUTReportsreportsidreports',
    resource: 'reports',
    method: 'PUT',
    path: '/reports/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};