module.exports = function DeleteConfigurationsconfigurationsid(req, res) {
  res.send({
    command: 'DELETEConfigurationsconfigurationsid',
    resource: 'configurations',
    method: 'DELETE',
    path: '/configurations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};