module.exports = function PostIntegrationsintegrationsid(req, res) {
  res.send({
    command: 'POSTIntegrationsintegrationsid',
    resource: 'integrations',
    method: 'POST',
    path: '/integrations/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};