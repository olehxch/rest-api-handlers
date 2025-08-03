module.exports = function PostAnalyticsanalyticsidhistory(req, res) {
  res.send({
    command: 'POSTAnalyticsanalyticsidhistory',
    resource: 'analytics',
    method: 'POST',
    path: '/analytics/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};