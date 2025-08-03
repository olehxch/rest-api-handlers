module.exports = function DeleteAnalyticsanalyticsid(req, res) {
  res.send({
    command: 'DELETEAnalyticsanalyticsid',
    resource: 'analytics',
    method: 'DELETE',
    path: '/analytics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};