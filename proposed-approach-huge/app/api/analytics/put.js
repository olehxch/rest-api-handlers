module.exports = function PutAnalyticsanalytics(req, res) {
  res.send({
    command: 'PUTAnalyticsanalytics',
    resource: 'analytics',
    method: 'PUT',
    path: '/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};