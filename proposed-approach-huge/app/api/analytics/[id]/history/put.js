module.exports = function PutAnalyticsanalyticsidhistory(req, res) {
  res.send({
    command: 'PUTAnalyticsanalyticsidhistory',
    resource: 'analytics',
    method: 'PUT',
    path: '/analytics/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};