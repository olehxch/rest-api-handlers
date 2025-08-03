module.exports = function PatchConfigurationsconfigurationsid(req, res) {
  res.send({
    command: 'PATCHConfigurationsconfigurationsid',
    resource: 'configurations',
    method: 'PATCH',
    path: '/configurations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};