module.exports = function PostMetricsmetricsid(req, res) {
  res.send({
    command: 'POSTMetricsmetricsid',
    resource: 'metrics',
    method: 'POST',
    path: '/metrics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};