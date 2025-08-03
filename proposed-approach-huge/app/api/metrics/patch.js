module.exports = function PatchMetricsmetrics(req, res) {
  res.send({
    command: 'PATCHMetricsmetrics',
    resource: 'metrics',
    method: 'PATCH',
    path: '/metrics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};