module.exports = function GetMetricsmetricsid(req, res) {
  res.send({
    command: 'GETMetricsmetricsid',
    resource: 'metrics',
    method: 'GET',
    path: '/metrics/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};