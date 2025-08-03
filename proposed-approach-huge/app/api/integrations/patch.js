module.exports = function PatchIntegrationsintegrations(req, res) {
  res.send({
    command: 'PATCHIntegrationsintegrations',
    resource: 'integrations',
    method: 'PATCH',
    path: '/integrations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};