module.exports = function PutAnalyticsanalyticsid(req, res) {
  res.send({
    command: 'PUTAnalyticsanalyticsid',
    resource: 'analytics',
    method: 'PUT',
    path: '/analytics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};