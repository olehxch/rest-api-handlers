module.exports = function PutIntegrationsintegrationsid(req, res) {
  res.send({
    command: 'PUTIntegrationsintegrationsid',
    resource: 'integrations',
    method: 'PUT',
    path: '/integrations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};