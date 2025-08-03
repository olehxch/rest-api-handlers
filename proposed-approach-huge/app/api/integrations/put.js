module.exports = function PutIntegrationsintegrations(req, res) {
  res.send({
    command: 'PUTIntegrationsintegrations',
    resource: 'integrations',
    method: 'PUT',
    path: '/integrations',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};