module.exports = function PostAnalyticsanalytics(req, res) {
  res.send({
    command: 'POSTAnalyticsanalytics',
    resource: 'analytics',
    method: 'POST',
    path: '/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};