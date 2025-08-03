module.exports = function PutWebhookswebhooks(req, res) {
  res.send({
    command: 'PUTWebhookswebhooks',
    resource: 'webhooks',
    method: 'PUT',
    path: '/webhooks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};