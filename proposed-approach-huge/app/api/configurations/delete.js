module.exports = function DeleteConfigurationsconfigurations(req, res) {
  res.send({
    command: 'DELETEConfigurationsconfigurations',
    resource: 'configurations',
    method: 'DELETE',
    path: '/configurations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};