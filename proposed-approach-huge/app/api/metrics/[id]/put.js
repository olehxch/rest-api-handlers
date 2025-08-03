module.exports = function PutMetricsmetricsid(req, res) {
  res.send({
    command: 'PUTMetricsmetricsid',
    resource: 'metrics',
    method: 'PUT',
    path: '/metrics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};