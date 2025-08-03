module.exports = function DeleteIntegrationsintegrationsid(req, res) {
  res.send({
    command: 'DELETEIntegrationsintegrationsid',
    resource: 'integrations',
    method: 'DELETE',
    path: '/integrations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};