module.exports = function DeleteAnalyticsanalytics(req, res) {
  res.send({
    command: 'DELETEAnalyticsanalytics',
    resource: 'analytics',
    method: 'DELETE',
    path: '/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};