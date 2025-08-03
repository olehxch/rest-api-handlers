module.exports = function PostMetricsmetrics(req, res) {
  res.send({
    command: 'POSTMetricsmetrics',
    resource: 'metrics',
    method: 'POST',
    path: '/metrics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};