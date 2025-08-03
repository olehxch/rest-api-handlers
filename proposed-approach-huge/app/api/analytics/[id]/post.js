module.exports = function PostAnalyticsanalyticsid(req, res) {
  res.send({
    command: 'POSTAnalyticsanalyticsid',
    resource: 'analytics',
    method: 'POST',
    path: '/analytics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};