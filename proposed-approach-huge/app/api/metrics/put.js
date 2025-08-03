module.exports = function PutMetricsmetrics(req, res) {
  res.send({
    command: 'PUTMetricsmetrics',
    resource: 'metrics',
    method: 'PUT',
    path: '/metrics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};