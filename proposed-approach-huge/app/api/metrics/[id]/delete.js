module.exports = function DeleteMetricsmetricsid(req, res) {
  res.send({
    command: 'DELETEMetricsmetricsid',
    resource: 'metrics',
    method: 'DELETE',
    path: '/metrics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};