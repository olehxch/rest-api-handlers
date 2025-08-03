module.exports = function DeleteMetricsmetrics(req, res) {
  res.send({
    command: 'DELETEMetricsmetrics',
    resource: 'metrics',
    method: 'DELETE',
    path: '/metrics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};