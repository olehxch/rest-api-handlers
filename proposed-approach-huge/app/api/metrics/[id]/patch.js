module.exports = function PatchMetricsmetricsid(req, res) {
  res.send({
    command: 'PATCHMetricsmetricsid',
    resource: 'metrics',
    method: 'PATCH',
    path: '/metrics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};