module.exports = function PatchAnalyticsanalyticsid(req, res) {
  res.send({
    command: 'PATCHAnalyticsanalyticsid',
    resource: 'analytics',
    method: 'PATCH',
    path: '/analytics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};