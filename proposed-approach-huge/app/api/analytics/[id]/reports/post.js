module.exports = function PostAnalyticsanalyticsidreports(req, res) {
  res.send({
    command: 'POSTAnalyticsanalyticsidreports',
    resource: 'analytics',
    method: 'POST',
    path: '/analytics/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};