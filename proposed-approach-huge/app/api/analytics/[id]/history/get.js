module.exports = function GetAnalyticsanalyticsidhistory(req, res) {
  res.send({
    command: 'GETAnalyticsanalyticsidhistory',
    resource: 'analytics',
    method: 'GET',
    path: '/analytics/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};