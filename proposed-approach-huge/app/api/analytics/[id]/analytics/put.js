module.exports = function PutAnalyticsanalyticsidanalytics(req, res) {
  res.send({
    command: 'PUTAnalyticsanalyticsidanalytics',
    resource: 'analytics',
    method: 'PUT',
    path: '/analytics/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};