module.exports = function GetConfigurationsconfigurations(req, res) {
  res.send({
    command: 'GETConfigurationsconfigurations',
    resource: 'configurations',
    method: 'GET',
    path: '/configurations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};