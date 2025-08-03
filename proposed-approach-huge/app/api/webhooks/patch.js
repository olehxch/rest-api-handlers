module.exports = function PatchWebhookswebhooks(req, res) {
  res.send({
    command: 'PATCHWebhookswebhooks',
    resource: 'webhooks',
    method: 'PATCH',
    path: '/webhooks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};