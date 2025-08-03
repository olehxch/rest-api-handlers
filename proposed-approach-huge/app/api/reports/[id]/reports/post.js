module.exports = function PostReportsreportsidreports(req, res) {
  res.send({
    command: 'POSTReportsreportsidreports',
    resource: 'reports',
    method: 'POST',
    path: '/reports/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};