module.exports = function GetAnalyticsanalytics(req, res) {
  res.send({
    command: 'GETAnalyticsanalytics',
    resource: 'analytics',
    method: 'GET',
    path: '/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};