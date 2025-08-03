module.exports = function PatchIntegrationsintegrationsid(req, res) {
  res.send({
    command: 'PATCHIntegrationsintegrationsid',
    resource: 'integrations',
    method: 'PATCH',
    path: '/integrations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};