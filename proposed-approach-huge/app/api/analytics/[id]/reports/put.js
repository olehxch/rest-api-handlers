module.exports = function PutAnalyticsanalyticsidreports(req, res) {
  res.send({
    command: 'PUTAnalyticsanalyticsidreports',
    resource: 'analytics',
    method: 'PUT',
    path: '/analytics/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};