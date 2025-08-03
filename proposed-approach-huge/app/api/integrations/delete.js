module.exports = function DeleteIntegrationsintegrations(req, res) {
  res.send({
    command: 'DELETEIntegrationsintegrations',
    resource: 'integrations',
    method: 'DELETE',
    path: '/integrations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};