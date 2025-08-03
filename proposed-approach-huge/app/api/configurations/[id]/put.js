module.exports = function PutConfigurationsconfigurationsid(req, res) {
  res.send({
    command: 'PUTConfigurationsconfigurationsid',
    resource: 'configurations',
    method: 'PUT',
    path: '/configurations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};