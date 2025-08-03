module.exports = function GetAnalyticsanalyticsidreports(req, res) {
  res.send({
    command: 'GETAnalyticsanalyticsidreports',
    resource: 'analytics',
    method: 'GET',
    path: '/analytics/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};