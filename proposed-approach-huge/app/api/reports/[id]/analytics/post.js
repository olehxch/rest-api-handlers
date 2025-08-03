module.exports = function PostReportsreportsidanalytics(req, res) {
  res.send({
    command: 'POSTReportsreportsidanalytics',
    resource: 'reports',
    method: 'POST',
    path: '/reports/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};