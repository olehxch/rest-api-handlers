module.exports = function DeleteWebhookswebhooks(req, res) {
  res.send({
    command: 'DELETEWebhookswebhooks',
    resource: 'webhooks',
    method: 'DELETE',
    path: '/webhooks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};