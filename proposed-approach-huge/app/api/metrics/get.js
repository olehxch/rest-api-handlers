module.exports = function GetMetricsmetrics(req, res) {
  res.send({
    command: 'GETMetricsmetrics',
    resource: 'metrics',
    method: 'GET',
    path: '/metrics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};